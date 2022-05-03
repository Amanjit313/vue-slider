/* 

    Partendo dal markup consegnato rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente

*/

const app = new Vue({

    el: "#app",

    data: {

        photos:[
                    {
                        image: 'img/01.jpg',
                        title: 'Svezia',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                    },
                    {
                        image: 'img/02.jpg',
                        title: 'Svizzera',
                        text: 'Lorem ipsum.'
                    },
                    {
                        image: 'img/03.jpg',
                        title: 'Gran Bretagna',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                    },
                    {
                        image: 'img/04.jpg',
                        title: 'Germania',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                    },
                    {
                        image: 'img/05.jpg',
                        title: 'Paradise',
                        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.'
                    }
                ],
                counterPhoto: 0

    },

    methods: {

        prevPhotos(){
            this.counterPhoto--;

            if (this.counterPhoto < 0){
                this.counterPhoto = 4;
            };

            console.log(this.counterPhoto);
        },

        nextPhotos(){
            this.counterPhoto++;

            if(this.counterPhoto > 4){
                this.counterPhoto = 0;
            };

            console.log(this.counterPhoto);
        },

        clickPhotos(index){
            this.counterPhoto = index;
        }

    }

});
