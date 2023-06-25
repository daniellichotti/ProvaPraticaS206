package prova_pratica.poke_api;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("poke").relativeTo(getClass());
    }    

}
