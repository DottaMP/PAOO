/*3) Neste exercício você vai escrever um conjunto de classes para
resolver o seguinte problema. Sistemas solares são constituídos de sóis, planetas
e luas. As suas classes devem permitir as seguintes operações:
• dado um sol s determinar quais são os planetas que orbitam s,
• dado um sol s determinar quais são as luas que orbitam s,
• dado um planeta p determinar quais luas orbitam p.
• dado um vetor de sóis determinar qual dentre este sóis é orbitado por um número máximo de planetas.
• dado um vetor de planetas determinar qual dentre estes planetas é orbitado por um número máximo de luas.*/

class Sol {
    planetas: Planeta[];
    luas: Lua[];
  
    planetasQueOrbitam(): Planeta[] {
      return this.planetas;
    }
  
    luasQueOrbitam(): Lua[] {
      return this.luas;
    }
  
    maximoDePlanetas(sois: Sol[]): Sol {
      let maximo = new Sol;
      for (let sol of sois) {
        if( sol.planetas.length > maximo.planetas.length) 
          maximo = sol;
      }
      return maximo;
    }
  }
  
  class Planeta {
    luas: Lua[];
    
    luasQueOrbitam(): Lua[] {
      return this.luas;
    }
  
    maximoDeLuas(planetas: Planeta[]): Planeta {
      let maximo = new Planeta;
      for (let planeta of planetas) {
        if( planeta.luas.length > maximo.luas.length) 
          maximo = planeta;
      }
      return maximo;
    }
  }
  
  class Lua {
  
  }