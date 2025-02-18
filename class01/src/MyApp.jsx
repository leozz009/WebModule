import { heroes } from './data/heroes.js'

export function MyApp() {
    console.log(heroes)
    const getHeroesbyId = (id) => heroes.find((heroe) => heroe.id === id)
    console.log(getHeroesbyId(2))
}