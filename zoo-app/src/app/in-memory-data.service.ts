import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animals = [
      { id: 0 },
      { id: 1, name: 'Pitbull', class: 'land predator', desc: 'Tough but cool dog', height: 60, weight: 25, count: 1, src: 'https://americanbullydaily.com/wp-content/uploads/2016/01/Blue-Nose-Pit-Bull-Dog-Breed-With-White-Body.jpg' },
      { id: 2, name: 'House cat', class: 'land predator', desc: 'Would prob eat us if they were bigger', height: 30, weight: 10, count: 1, src: 'http://www.redorbit.com/media/uploads/2004/10/42_a25de8361871b1b6334c07f75235b621.jpg' },
      { id: 3, name: 'Newt', class: 'land prey', desc: 'Lizard that likes to crawl on walls', height: 3, weight: .5, count: 1, src: 'http://www.californiaherps.com/salamanders/images/ttsierraehh.jpg' },
      { id: 4, name: 'Robin', class: 'air prey', desc: 'Bird with a red belly', height: 5, weight: .1, count: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Turdus-migratorius-002.jpg' },
      { id: 5, name: 'Parakeet', class: 'air prey', desc: 'Colorful potentially talkative birds', height: 6, weight: .1, count: 1, src: 'https://fthmb.tqn.com/94sqKdEBilaIH-EeUH8GOjMTeMs=/2737x1820/filters:fill(auto,1)/GettyImages-182203416-58a6e95d3df78c345b622ae9.jpg' },
      { id: 6, name: 'Shark', class: 'water predator', desc: 'Apex predators of the sea, besides Orcas', height: 70, weight: 100, count: 1, src: 'https://i.kinja-img.com/gawker-media/image/upload/s--4SxptGXR--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wei1u2yht7hxkpsrwarr.jpg' },
      { id: 7, name: 'Opposum', class: 'land prey', desc: 'Freaky little rat looking marsupials', height: 20, weight: 1, count: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Opossum_2.jpg' },
      { id: 8, name: 'Warthog', class: 'land prey', desc: 'Pigs, inspired Hogwarts', height: 40, weight: 15, count: 1, src: 'https://az616578.vo.msecnd.net/files/2016/08/19/636072351334974876-461865168_common-warthog.jpg' },
      { id: 9, name: 'Bat', class: 'air predator', desc: 'Free blood transfusions everybody!', height: 5, weight: .1, count: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg' },
      { id: 10, name: 'Iguana', class: 'land prey', desc: 'Mellow lizards, make great pets', height: 20, weight: 250, count: 1, src: 'http://www.errandsolutions.com/sites/errandsolutions.com/assets/images/WowStory/iguana-w.jpg' },
      { id: 11, name: 'Turkey', class: 'land prey', desc: 'Goofy bird, staple of Thanksgiving meals', height: 60, weight: 15, count: 1, src: 'https://wonderopolis.org/wp-content/uploads/2015/11/1_1.jpg' }
    ];
    return { animals };
  }
}