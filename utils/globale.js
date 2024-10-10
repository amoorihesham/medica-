
export class Global {
     initalState  ;
     constructor(state) {
        this.initalState = state
     }
    reduser = ()=>{
    }
    filterItem = () =>{
        return this.initalState.filter((item) => item ==3)
    }
}