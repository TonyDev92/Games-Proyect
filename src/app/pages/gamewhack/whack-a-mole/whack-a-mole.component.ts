import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-whack-a-mole',
  templateUrl: './whack-a-mole.component.html',
  styleUrls: ['./whack-a-mole.component.scss']
})
export class WhackAMoleComponent implements OnInit{
    score: number = 0;
    timer: any = 30;
    interval: any;
    strike: boolean = false;
    mole = './assets/exercise-2/mole.png';
    whack = './assets/exercise-2/whack.png';
    files: number = 3;
    columns: number = 3;
    table: any[][] = [];
    counter: boolean = true;
    aleatoryInterval: any;
    check: any;
    createContent(){
      this.table = Array.from({ length: this.files },  () =>
      Array.from({ length: this.columns})); 
      // console.log(this.table);
    }
    aleatoryPosition(){
      let randomRow = Math.floor(Math.random() * this.files); 
      let randomCol = Math.floor(Math.random() * this.columns);
      this.table[randomRow][randomCol] = this.strike;
        // this.strike = false;
        for(let i = 0; i < this.table.length; i++){
          for(let j = 0; j < this.table[i].length; j++){
            if(this.table[i][j] == this.strike){
              this.strike = true;
              this.table[i][j] = 0;
            }else if(this.table[i][j] !== this.strike){
              this.table[i][j] = -1;
            }
          }
        } 
  }
    setScore(x:number, y: number){
      console.log(x, y);
      
      if(this.table[x][y] == 0){
        // this.table[x][y] = -1
        this.score++;
      }
      
    }
    init(){
      this.timer = 30;
      this.score = 0;
      
      this.interval = setInterval(() => { //Con set interval y este condicional conseguiremos que el contador llegue a 0
          this.timer > 0 ? this.timer-- : clearInterval(this.interval);
          if(this.timer == 0 && this.score < 12){
            if(confirm(`You lose with this Score:${this.score} ,¿Do you want Restart?`)){
              this.score = 0;
              this.timer = 30;
              clearInterval(this.interval);
              clearInterval(this.aleatoryInterval); 
              this.init();
            }else{
              this.score = 0;
              this.timer = 30;
              clearInterval(this.interval);
              clearInterval(this.aleatoryInterval);
              this.strike = false
            }
          
          }
          if(this.timer == 0 && this.score >= 12){
            alert(`Congratulations you won with this score: ${this.score}`)
            this.score = 0;
            this.timer = 30;
            clearInterval(this.interval);
            clearInterval(this.aleatoryInterval);
          }
      }, 1000) //Esta función se ejecuta cada segundo restando 1 al contador
      this.aleatoryInterval = setInterval(() => {
        this.timer > 0 ? this.aleatoryPosition() : clearInterval(this.aleatoryInterval);
      }, 500)
      
  
    }
    ngOnInit(): void {
      this.createContent();

  }
  
}
