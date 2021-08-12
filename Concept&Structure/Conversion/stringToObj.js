import makeObject from './make-obj.js'

const movieData = `Title,Release,Ticketing Rate,Director
보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어
완벽한 타인,2018.10.31,4.6%,임재규
동네사람들,2018.11.07,0.5%,임진순`

const movieList = new makeObject(movieData)
