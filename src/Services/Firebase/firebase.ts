import { initializeApp } from 'firebase/app'
import { getDatabase, get, set, ref, child } from 'firebase/database'
import { getStorage } from 'firebase/storage'

import firebaseSecret from '@Config/firebaseSecret'

const app = initializeApp(firebaseSecret)
const database = getDatabase(app)
const storage = getStorage(app)

const categoriesRef = ref(database, 'categories')

interface Writing {
  id: string
  title: string
  publishedDate: Date
  markdownContent: string
}

interface WritingJson {
  title: string
  publishedDate: number
  markdownContent: string
}

function convertWritingJsonToData(
  writingId: string,
  writingJson: WritingJson
): Writing {
  return {
    id: writingId,
    title: writingJson.title,
    publishedDate: new Date(writingJson.publishedDate),
    markdownContent: writingJson.markdownContent,
  }
}

export async function readWritings(categoryName: string): Promise<Writing[]> {
  const snapshot = await get(child(categoriesRef, categoryName))

  return Object.entries(snapshot.val()).map(([writingId, writingJson]) =>
    convertWritingJsonToData(writingId, writingJson as WritingJson)
  )
}
