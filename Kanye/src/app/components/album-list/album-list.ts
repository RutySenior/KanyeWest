import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Album {
  title: string;
  year: number;
  cover: string;
}

@Component({
  selector: 'app-album-list',
  imports: [CommonModule],
  templateUrl: './album-list.html',
  styleUrl: './album-list.css',
})
export class AlbumList {
  albums: Album[] = [
    {
      title: 'The College Dropout',
      year: 2004,
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg'
    },
    {
      title: 'Late Registration',
      year: 2005,
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg'
    },
    {
      title: 'Graduation',
      year: 2007,
      cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg'
    },
    {
      title: '808s & Heartbreak',
      year: 2008,
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png'
    },
    {
      title: 'My Beautiful Dark Twisted Fantasy',
      year: 2010,
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/MBDTF_ALT.jpg/250px-MBDTF_ALT.jpg'
    },
    {
      title: 'Watch The Throne',
      year: 2011,
      cover: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg'
    },
    {
      title: 'Cruel Summer',
      year: 2012,
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/ab/CruelSummercover.jpg'
    },
    {
      title: 'Yeezus',
      year: 2013,
      cover: 'https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png'
    },
    {
      title: 'The Life of Pablo',
      year: 2016,
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg'
    },
    {
      title: 'Ye',
      year: 2018,
      cover: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg'
    },
    {
      title: 'Kids See Ghosts',
      year: 2018,
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Kids_See_Ghosts_Cover.png/250px-Kids_See_Ghosts_Cover.png'
    },
    {
      title: 'Jesus Is King',
      year: 2019,
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Kanye_West_-_Jesus_Is_King.png'
    },
    {
      title: 'Donda',
      year: 2021,
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Kanye_West_-_Donda_With_Child.png/250px-Kanye_West_-_Donda_With_Child.png'
    },
    {
      title: 'Donda 2',
      year: 2022,
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Donda_2_streaming_album_cover.jpg'
    },
    {
      title: 'Vultures 1',
      year: 2024,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kanye_West_and_Ty_Dolla_Sign_-_Vultures_Vol._1_%28Cover%29.png/250px-Kanye_West_and_Ty_Dolla_Sign_-_Vultures_Vol._1_%28Cover%29.png'
    },
    {
      title: 'Vultures 2',
      year: 2024,
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/66/%C2%A5%24_-_Vultures_2.png'
    },
    {
      title: 'Bully',
      year: 2025,
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Ye_%28Kanye_West%29_-_Bully_-_Album_Cover.png'
    }
  ];
}