declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string
      AES_KEY: string
      AES_IV: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
