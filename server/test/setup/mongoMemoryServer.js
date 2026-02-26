import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { afterAll, afterEach, beforeAll } from 'vitest'

let mongoServer

export const connectTestDB = async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.connect(uri)
}

export const clearTestDB = async () => {
  const collections = mongoose.connection.collections
  await Promise.all(
    Object.values(collections).map((collection) => collection.deleteMany({}))
  )
}

export const disconnectTestDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close()
  }

  if (mongoServer) {
    await mongoServer.stop()
  }
}

export const useMongoMemoryServer = () => {
  beforeAll(async () => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret'
    await connectTestDB()
  })

  afterEach(async () => {
    await clearTestDB()
  })

  afterAll(async () => {
    await disconnectTestDB()
  })
}
