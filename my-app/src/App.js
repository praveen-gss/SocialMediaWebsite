import React, { useState, useEffect } from 'react';

function App() {
  var heroes_object  = require('dota2-heroes');
  var heroes_list = heroes_object.all;
  var counters_object = {"Abaddon":["Alchemist", "Ancient Apparition"], "Alchemist":["Ancient Apparition"]};
  var options_list = heroes_list.map(i => (<option value={i}>{i}</option>));
  console.log(options_list)
  var picked_list = [];
  var intersecting_heroes = ["Alchemist", "Ancient Apparition"];
  var arrays = [];


  const [hero1, setHero1] = useState("Abaddon");
  const [hero2, setHero2] = useState("Abaddon");
  const [hero3, setHero3] = useState("Abaddon");
  const [hero4, setHero4] = useState("Abaddon");
  const [hero5, setHero5] = useState("Abaddon");
  const [jsx_counters, setJsx_counters_list] = useState((<ol><li>{"Alchemist"}</li><li>{"Ancient Apparition"}</li></ol>))

  useEffect(() => {
      picked_list = [hero1,hero2,hero3,hero4,hero5];
      for (var i of picked_list) {
        for (var j of Object.keys(counters_object)) {
          if (i === j) {
            arrays.push(counters_object[j])
          }
        }
      }
      intersecting_heroes = arrays.shift().filter(function(v) {
        return arrays.every(function(a) {
            return a.indexOf(v) !== -1;
        });
      });
      setJsx_counters_list((<ol>{intersecting_heroes.map((counter) => {return (<li key={counter}>{counter}</li>);})}</ol>));
    }, [hero1,hero2,hero3,hero4,hero5]);

  return (
    <div id="parent">
      <div id="hero-picker">
        <header>Choose Heroes</header>
        <label for="hero1">#1:</label>
        <select onChange={({target}) => setHero1(target.value)} name="hero1" id="hero1">
          {options_list}
        </select>
        <label for="hero2">#2:</label>
        <select onChange={({target}) => setHero2(target.value)} name="hero2" id="hero2">
          {options_list}
        </select>
        <label for="hero3">#3:</label>
        <select onChange={({target}) => setHero3(target.value)} name="hero3" id="hero3">
          {options_list}
        </select>
        <label for="hero4">#4:</label>
        <select onChange={({target}) => setHero4(target.value)} name="hero4" id="hero4">
          {options_list}
        </select>
        <label for="hero5">#5:</label>
        <select onChange={({target}) => setHero5(target.value)} name="hero5" id="hero5">
          {options_list}
        </select>
      </div>
      <div id="counters-displayer">
        <header>Counters:</header>
        {jsx_counters}
      </div>
    </div>
  );
}

export default App;
