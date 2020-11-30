import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Driver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor() { }

  getDrivers(): Observable<Array<Driver>> {
    return of([{
      id: 1,
      name: 'Alexander Albon',
      photo: 'alexander-albon.jpg',
      pts: 70,
      data: 'Alexander Albon es un piloto de automovilismo tailandés-británico. Finalizó tercero el Campeonato de Fórmula 2 de la FIA 2018 con DAMS, y es piloto de Aston Martin Red Bull Racing en Fórmula 1 desde mediados de 2019',
    },
    {
      id: 2,
      name: 'Antonio Giovinazzi',
      photo: 'anotnio-giovinazzi.jpg',
      pts: 4,
      data: 'Antonio Giovinazzi es un piloto de automovilismo de velocidad italiano.​ Fue subcampeón en F3 Europea y GP2 Series, y es piloto de Alfa Romeo desde la temporada 2019 de Fórmula 1.',
    },
    {
      id: 3,
      name: 'Carlos Sainz',
      photo: 'carlos-sainz.jpg',
      pts: 75,
      data: 'Carlos Sainz Vázquez de Castro, más conocido como Carlos Sainz Jr. o simplemente Carlos Sainz, es un piloto de automovilismo español. En 2014 ganó el campeonato de Formula Renault 3.5 Series. Desde 2019 es titular del equipo McLaren. Es hijo del expiloto y campeón del Campeonato Mundial de Rally Carlos Sainz.​​',
    },
    {
      id: 4,
      name: 'Charles Leclerc',
      photo: 'charles-leclerc.jpg',
      pts: 97,
      data: 'Charles Marc Hervé Perceval Leclerc, más conocido como Charles Leclerc, es un piloto de automovilismo monegasco. Es miembro de la Academia de Pilotos de Ferrari desde 2016, fue ganador del Campeonato de Fórmula 2 de la FIA con el equipo Prema en 2017.​​',
    },
    {
      id: 5,
      name: 'Daniil Kyvat',
      photo: 'daniel-kvyat.jpg',
      pts: 26,
      data: 'Daniil Viacheslavovich Kvyat es un piloto ruso de automovilismo de velocidad. En 2012 fue campeón de la Fórmula Renault 2.0 con 7 victorias. En 2013 compitió en Fórmula 3 Europea como invitado y se proclamó campeón de la cuarta temporada de GP3 Series. Debutó en Fórmula 1 en Scuderia Toro Rosso para la temporada 2014.'
    },
    {
      id: 6,
      name: 'Daniel Ricciardo',
      photo: 'daniel-ricciardo.jpg',
      pts: 96,
      data: 'Daniel Joseph Ricciardo es un piloto de automovilismo australiano de ascendencia italiana. Ganó la Fórmula 3 Británica en el año 2009 y desde 2011 es piloto de Fórmula 1. Entre 2014 y 2018 compitió en Red Bull, desde la temporada 2019 es titular en el equipo Renault.'
    },
    {
      id: 7,
      name: 'Esteban Ocon',
      photo: 'esteban-ocon.jpg',
      pts: 40,
      data: 'Esteban Ocon es un piloto francés de automovilismo de velocidad.​ Fue campeón de Fórmula 3 Europea y GP3 Series. Debutó en Fórmula 1 en 2016 con Manor y más tarde compitió para Force India/Racing Point. Luego de un año de desarrollo con Mercedes, volvió a este campeonato de la mano de Renault.'
    },
    {
      id: 8,
      name: 'George Russsel',
      photo: 'george-russell.jpg',
      pts: 0,
      data: 'George Russell es un piloto británico de automovilismo.​ En 2017 fue campeón de la GP3 Series y en 2018 del Campeonato de Fórmula 2 de la FIA con ART. Desde 2019 forma parte del equipo Williams en Fórmula 1.​'
    },
    {
      id: 9,
      name: 'Kevin Magnussen',
      photo: 'kevin-magnussen.jpg',
      pts: 1,
      data: 'Kevin Magnussen es un piloto danés de automovilismo de velocidad.​ Es hijo del piloto retirado de Fórmula 1 Jan Magnussen. En 2013 ganó el campeonato de Formula Renault 3.5 Series y fue miembro del Programa de Jóvenes Pilotos de McLaren.​'
    },
    {
      id: 10,
      name: 'Kimi Raikkonen',
      photo: 'kimi-raikkonen.jpg',
      pts: 4,
      data: 'Kimi-Matias Räikkönen, conocido como Iceman, es un piloto de automovilismo finlandés. Fue campeón mundial de Fórmula 1 en 2007 con Ferrari, subcampeón en 2003 y 2005 con McLaren, y tercero en 2008, 2012 y 2018.​'
    },
    {
      id: 11,
      name: 'Lance Stroll',
      photo: 'lance-stroll.jpg',
      pts: 59,
      data: 'Lance Stroll es un piloto canadiense de automovilismo de velocidad. Ganó los campeonatos de Fórmula 4 Italiana en 2015 y Fórmula 3 Europea en 2016. Disputó las temporadas 2017 y 2018 con Williams en Fórmula 1, pero a partir de 2019 es piloto de Racing Point.​'
    },
    {
      id: 12,
      name: 'Lando Norris',
      photo: 'lando-norris.jpg',
      pts: 74,
      data: 'Lando Norris es un piloto de automovilismo que compite bajo nacionalidad británica, aunque posee también nacionalidad belga.​ Fue campeón de Fórmula 3 Europea en 2017 y subcampeón de Fórmula 2 en 2018 con el equipo Carlin.​​Desde 2019 forma parte de la plantilla de pilotos de McLaren, junto a Carlos Sainz Jr.'
    },
    {
      id: 13,
      name: 'Lewis Hamilton',
      photo: 'lewis-hamilton.jpg',
      pts: 307,
      data: 'Lewis Carl Davidson Hamilton, ​ MBE, es un piloto británico de automovilismo. En Fórmula 1 desde 2007 hasta 2012, fue piloto de la escudería McLaren, con la cual fue campeón en 2008 y subcampeón en 2007.'
    },
    {
      id: 14,
      name: 'Max Verstappen',
      photo: 'max-verstappen.jpg',
      pts: 170,
      data: 'Max Emilian Verstappen es un piloto de automovilismo neerlandés. Nació en Bélgica, pero utiliza la nacionalidad de Países Bajos de su padre Jos, también piloto. Compite para el equipo Red Bull Racing en la Fórmula 1.​'
    },
    {
      id: 15,
      name: 'Nicholas Latifi',
      photo: 'nicholas-latifi.jpg',
      pts: 0,
      data: 'Nicholas Latifi es un piloto canadiense de automovilismo. En 2019 fue subcampeón del Campeonato de Fórmula 2 de la FIA con DAMS. Actualmente es piloto titular del equipo Williams en Fórmula 1.​'
    },
    {
      id: 16,
      name: 'Pierre Gasly',
      photo: 'pierre-gasly.jpg',
      pts: 63,
      data: 'Pierre Gasly es un piloto de automovilismo de velocidad francés. Campeón de la Eurocopa Fórmula Renault 2.0 en 2013 y de GP2 Series en 2016. Debutó en Toro Rosso en la temporada 2017 de Fórmula 1.​​ Ese año también fue subcampeón de Super Fórmula Japonesa.'
    },
    {
      id: 17,
      name: 'Romain Grosjean',
      photo: 'romain-grosjean.jpg',
      pts: 2,
      data: 'Romain Grosjean es un piloto de automovilismo francés. Fue campeón de la Fórmula 3 Euroseries 2007 y la GP2 Series 2011. Grosjean ha disputado en Fórmula 1 en 2009 para Renault, en 2012-2015 para Lotus y desde 2016 es piloto del equipo Haas.'
    },
    {
      id: 18,
      name: 'Sebastian Vettel',
      photo: 'sebastian-vettel.jpg',
      pts: 33,
      data: 'Sebastian Vettel es un piloto alemán de automovilismo de velocidad. Llegó formando parte del Equipo Júnior de Red Bull desde los 11 años.'
    },
    {
      id: 19,
      name: 'Sergio Perez',
      photo: 'sergio-perez.jpg',
      pts: 100,
      data: 'Sergio Michel Pérez Mendoza también conocido como Checo Pérez, es un piloto de automovilismo mexicano.​ Inició su carrera en monoplazas en 2004. Tres años más tarde fue campeón de la Clase Nacional de Fórmula 3 Británica. Debutó en GP2 Series en 2009 y al año siguiente fue subcampeón con Addax Team.'
    },
    {
      id: 20,
      name: 'Valtteri Bottas',
      photo: 'valtteri-bottas.jpg',
      pts: 197,
      data: 'Valtteri Viktor Bottas es un piloto de automovilismo finlandés .​ En la actualidad reside en Mónaco y desde 2017 compite para el equipo Mercedes en Fórmula 1.​ Anteriormente compitió en Williams como piloto titular desde 2013 hasta 2016.'
    },
    ])
  }
}
