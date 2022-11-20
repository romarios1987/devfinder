import { GithubUser } from 'types'

export const isGithubUser = (user: any): user is GithubUser => 'login' in user
