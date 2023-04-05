import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-find-the-treasure',
  templateUrl: './find-the-treasure.component.html',
  styleUrls: ['./find-the-treasure.component.scss']
})
export class FindTheTreasureComponent implements OnInit{
    maxFiles!: number;
    maxColumns!: number;
    gameOver: boolean = false;
    treasure: boolean = false;
    attemps: number = 0;
    x = "./assets/exercise-4/x.png";
    skull = "./assets/exercise-4/skull.png";
    chest = "./assets/exercise-4/chest.png";
    randonPosition: number[][] =  [];
    imgToChange = this.x;
    tableData: any[][] = []; //Este array esta devolviendo varios items undefined
    arrImg: any[][] = [[this.chest, this.x,this.skull] , [this.treasure, this.x, this.chest]];
    
    randonNum(){
      
      const randomRow = Math.floor(Math.random() * this.maxFiles); //Aquí voy a generar las coordenadas aleatorias
      const randomCol = Math.floor(Math.random() * this.maxColumns);
      console.log(`la posición del tesoro es ${randomRow} & ${randomCol}`);
      return [randomRow][randomCol];
    }
    nuevaPosicion = this.randonNum();
    tryIng(x: number, y: number){                           //Con esta función recojemos las coordenadas del click
        if(this.tableData[x][y] == this.treasure){          //Se comprueba que sean iguales a las del tesoro 
          this.treasure = true
          this.tableData[x][y] = 0;
          alert(`Has ganado Con ${this.attemps} Intentos`)  //Si lo es indicamos al usuario que ha ganado
        }else if(this.tableData[x][y] !== this.treasure){  //Si no definimos el indice como -1
          this.tableData[x][y] = -1;                        
          this.attemps++;
        }else{                                             //Si no es ninguna definimos indice como +1
          this.tableData[x][y] = +1;
        }
        if(this.attemps > this.maxColumns * this.maxFiles / 2){   //La dificultad del juego se basará en el número de columnas
          this.gameOver = true;                                    // por el número de filas que introduzca el usuario 
          if (confirm(`You lose With ${this.attemps} attemps ¿Do you want restart?`)){ //esta condición reinicia el juego por completo
            this.gameOver = false;
            this.treasure = false;
            this.attemps = 0;
            this.start()
          }
        }
        if(this.gameOver == true){
          
          this.attemps = 0;
        }
        console.log(x , y );
        
        
    }
    // changeImage(x:number, y: number){
    //     if(this.arrImg[x][y] === this.x){
    //       this.imgToChange = this.skull
    //       console.log(x, y);
          
    //     }
    // } 
      start(){
      this.tableData = Array.from({ length: this.maxFiles },  () =>
      Array.from({ length: this.maxColumns})); 
      console.log(this.tableData)
      const randomRow = Math.floor(Math.random() * this.maxFiles); //Aquí voy a generar las coordenadas aleatorias
      const randomCol = Math.floor(Math.random() * this.maxColumns);
      this.tableData[randomRow][randomCol]  = this.treasure
      //Con esta Función en base a lo que introduce el usuario 
      //a través del input genero la tabla con tantas filas
      // y columnas como indique
    }
    reset(){
      if(confirm('¿Do you want Reset?')){
      this.gameOver = false;
      this.treasure = false;
      this.attemps = 0;
      this.tableData = [];
      this.maxColumns = 0;
      this.maxFiles = 0;
      this.start()
      }
    }
    ngOnInit():void{

    }
}
