// Downloads the licensed Wikimedia Commons photographs used by the campaign,
// converts them to optimised WebP and writes attribution data to src/data/credits.json.
// Usage: node scripts/fetch-images.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const UA = { 'User-Agent': 'forest-is-calling-campaign/1.0 (static landing page; contact via repository)' }

const IMAGES = [
  { id: 'hero', file: 'Hutan Gunung Leuser Aceh.jpg', width: 2400 },
  { id: 'reality', file: 'Marking the Fire.jpg', width: 2000 },
  { id: 'after', file: 'Batlefield.jpg', width: 2000 },
  { id: 'biodiversity', file: 'Bornean orangutan (Pongo pygmaeus), Tanjung Putting National Park 15.jpg', width: 1600 },
  { id: 'air', file: 'Misty river in Mentawai rainforest at sunrise.jpg', width: 1600 },
  { id: 'climate', file: 'The Rimba Raya Biodiversity Reserve, an InfiniteEARTH Project.jpg', width: 1800 },
  { id: 'future', file: 'Mangrove forest reforestation.jpg', width: 1600 },
  { id: 'human', file: 'Aliran Sungai di Hutan Tangkahan.jpg', width: 2000 },
  { id: 'final', file: 'Hutan Taman Nasional Gunung Gede Pangrango Hadap Atas.jpg', width: 2200 },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const strip = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

async function get(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: UA })
    if (res.ok) return res
    await sleep(2500 * (i + 1))
  }
  throw new Error('Failed: ' + url)
}

const outDir = path.resolve('public/images')
await fs.mkdir(outDir, { recursive: true })
await fs.mkdir(path.resolve('src/data'), { recursive: true })
const credits = {}

for (const img of IMAGES) {
  const title = 'File:' + img.file
  const meta = await (
    await get(
      'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=' +
        encodeURIComponent(title),
    )
  ).json()
  const page = Object.values(meta.query.pages)[0]
  const em = page.imageinfo[0].extmetadata
  credits[img.id] = {
    title: img.file,
    author: strip(em.Artist?.value),
    license: em.LicenseShortName?.value,
    licenseUrl: em.LicenseUrl?.value ?? null,
    source: page.imageinfo[0].descriptionurl,
  }
  const src = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(img.file) + '?width=' + img.width
  const buf = Buffer.from(await (await get(src)).arrayBuffer())
  const info = await sharp(buf)
    .rotate()
    .resize({ width: img.width, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(outDir, img.id + '.webp'))
  console.log(img.id, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB', credits[img.id].license)
  await sleep(1500)
}

await fs.writeFile('src/data/credits.json', JSON.stringify(credits, null, 2))
console.log('done')
