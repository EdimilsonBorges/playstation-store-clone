import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-small-card',
  templateUrl: './container-small-card.component.html',
  styleUrls: ['./container-small-card.component.css']
})
export class ContainerSmallCardComponent implements OnInit {

  @Input()
  tipo:string = "";
  titleCard:string = "";
  itens:any = [];

  constructor() { }

  ngOnInit(): void {
    if(this.tipo == "pais"){
      this.titleCard = "10 melhores jogos no seu país";
      this.itens = [
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202307/0710/7f2cb30474b1264f2ab7339d7d82005610a5349920cddc75.png", 
          titleSmallCard:"EA SPORTS FC™ 24"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/2120/c43634250d3be777a32ff55980ebe29889ad6cc4a337d3b5.png",
          titleSmallCard:"Fortnite"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/1cc63f4f4b2c9a9852fabefba4ca7eea936b1ef7867811a5.png",
          titleSmallCard:"Mortal Kombat 1"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202306/2609/278035a1f94e3a07d4d0f74cd61b987af14a833b65a56cd2.png",
          titleSmallCard:"NBA 2K24"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202309/0511/dd2730f53d70dd353b17e2c01398e82acf29d60cc4c1fe4c.png",
          titleSmallCard:"eFootball™ 2024"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/1623/ba00d855b4f9061f4f7c294506753f58bf33ac28453a8de4.png",
          titleSmallCard:"Call of Duty®"
        }
      ];
    }
    if(this.tipo == "novos"){
      this.titleCard = "Novos jogos";
      this.itens = [
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202306/2609/278035a1f94e3a07d4d0f74cd61b987af14a833b65a56cd2.png", 
          titleSmallCard:"NBA 2K24"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202305/2315/607d9ed1ac762c9de33ef73fd09b3431d0b96ef4985ac2fb.png",
          titleSmallCard:"The Crew Motorfest"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png",
          titleSmallCard:"Baldur's Gate 3"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202305/0323/a6963ea63424c384dd3ff4d2126fa4a52080eefcabb2eeab.png",
          titleSmallCard:"ARMORED CORE™ VI FIRES OF RUBICON™"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/1512/a800dc5a941af33b5f7b7371f907a0fe26f3c435e4c20f60.png",
          titleSmallCard:"Totally Accurate Battle Simulator"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202303/2214/619cb9f567dd1ae02d269349a32b4ffca9783bad750bfe37.png",
          titleSmallCard:"SUPER BOMBERMAN R 2"
        }
      ];
    }
    if(this.tipo == "pre"){
      this.titleCard = "Pré-venda";
      this.itens = [
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/0910/3afa386d1768551865cb75b8cf95f2ff8be74453b1057862.png", 
          titleSmallCard:"Edição Ultimate do EA SPORTS FC™ 24 para..."
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202307/0710/7c13365a04b5776c36bc18cf3d8cdca12593cb6c62c518e0.png",
          titleSmallCard:"Edição Standard do EA SPORTS FC™ 24 para..."
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/1cc63f4f4b2c9a9852fabefba4ca7eea936b1ef7867811a5.png",
          titleSmallCard:"Mortal Kombat™ 1"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/98af148cb3f2469d4268eb15b235c255eeeec1757eda1fd6.png",
          titleSmallCard:"Marvel's Spider-Man 2 Edição Digital Deluxe"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/98af148cb3f2469d4268eb15b235c255eeeec1757eda1fd6.png",
          titleSmallCard:"Marvel’s Spider-Man 2"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202305/2308/06b354c8015b3c71e54f43aa883aab4641285d4a91734681.png",
          titleSmallCard:"Lies of P"
        }
      ];
    }
    if(this.tipo == "demo"){
      this.titleCard = "Demonstrações";
      this.itens = [
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202307/3122/9a905d0b4f227c5c976989319503d225fa7a815d49c79409.png", 
          titleSmallCard:"Demo de Ghostrunner 2"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202309/0608/b896e217418117133673c3859e5b2e3d45768744781de937.png",
          titleSmallCard:"STAR OCEAN THE SECOND STORY R -..."
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202309/0608/b896e217418117133673c3859e5b2e3d45768744781de937.png",
          titleSmallCard:"STAR OCEAN THE SECOND STORY R -..."
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/0200/6717be0617d9215ca70a6d2328736c7d83b58070ef87ad4b.png",
          titleSmallCard:"Disgaea 7: Vows of the Virtueless Demo"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202308/0200/6717be0617d9215ca70a6d2328736c7d83b58070ef87ad4b.png",
          titleSmallCard:"Disgaea 7: Vows of the Virtueless Demo"
        },
        {
          linkImg:"https://image.api.playstation.com/vulcan/ap/rnd/202306/2722/b38859c216baa14fc54634fdcdeff8f792f077fde7ba1dd3.png",
          titleSmallCard:"Colorful Boi - DEMO"
        }
      ];
    }
  }

}
