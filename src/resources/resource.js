import makeResource from './http'

export const user = makeResource('/auth/user')
export const userInfo = makeResource('/auth/user/:id')
export const comment = makeResource('/api/comment')
export const articleComment = makeResource('/api/comment/:postTarget')
