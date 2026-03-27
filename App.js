import './App.css';
import {useState} from 'react';

function App() {
  
  const [currPlayer, setCurrPlayer] = useState("Player 1");

  const [diceValue, setDiceValue] = useState(0)

  const rollDice = () => {
    let rollValue = Math.floor(Math.random() * 6) + 1;

    setDiceValue(rollValue);

    if (currPlayer === "Player 1") {
      setCurrPlayer("Player 2")
    } else {
      setCurrPlayer("Player 1")
    }
  }

  return (
    <div className='App'>
      <h1>Snakes and Ladders</h1>
      <h2>Turn: {currPlayer}</h2>
      <button className='rollDiceBtn' onClick={rollDice}>Roll the Dice!</button>
      <br></br>
      <br></br>
      <input value={diceValue} readOnly/>
      <br></br>
      <br></br>
      <h2>Legend</h2>
      <p>Snakes: <span style={{color: 'red', fontWeight: 'bold'}}>Red</span> | Ladders: <span style={{color: 'rgb(0, 224, 0)', fontWeight: 'bold'}}>Green</span></p>

      <table>
        <tr>
          <td className='91'>91</td>
          <td className='92'>92</td>
          <td className='93'>93</td>
          <td className='94'>94</td>
          <td className='95'>95</td>
          <td className='96'>96</td>
          <td className='97'>97</td>
          <td className='98'>98</td>
          <td className='99'>99</td>
          <td className='100'>100</td>
        </tr>

        <tr>
          <td className='90'>90</td>
          <td className='89'>89</td>
          <td className='88'>88</td>
          <td className='87'>87</td>
          <td className='86'>86</td>
          <td className='85'>85</td>
          <td className='84'>84</td>
          <td className='83'>83</td>
          <td className='82'>82</td>
          <td className='81'>81</td>
        </tr>

        <tr>
          <td className='71'>71</td>
          <td className='72'>72</td>
          <td className='73'>73</td>
          <td className='74'>74</td>
          <td className='75'>75</td>
          <td className='76'>76</td>
          <td className='77'>77</td>
          <td className='78'>78</td>
          <td className='79'>79</td>
          <td className='80'>80</td>
        </tr>

        <tr>
          <td className='70'>70</td>
          <td className='69'>69</td>
          <td className='68'>68</td>
          <td className='67'>67</td>
          <td className='66'>66</td>
          <td className='65'>65</td>
          <td className='64'>64</td>
          <td className='63'>63</td>
          <td className='62'>62</td>
          <td className='61'>61</td>
        </tr>

        <tr>
          <td className='51'>51</td>
          <td className='52'>52</td>
          <td className='53'>53</td>
          <td className='54'>54</td>
          <td className='55'>55</td>
          <td className='56'>56</td>
          <td className='57'>57</td>
          <td className='58'>58</td>
          <td className='59'>59</td>
          <td className='60'>60</td>
        </tr>

        <tr>
          <td className='50'>50</td>
          <td className='49'>49</td>
          <td className='48'>48</td>
          <td className='47'>47</td>
          <td className='46'>46</td>
          <td className='45'>45</td>
          <td className='44'>44</td>
          <td className='43'>43</td>
          <td className='42'>42</td>
          <td className='41'>41</td>
        </tr>

        <tr>
          <td className='31'>31</td>
          <td className='32'>32</td>
          <td className='33'>33</td>
          <td className='34'>34</td>
          <td className='35'>35</td>
          <td className='36'>36</td>
          <td className='37'>37</td>
          <td className='38'>38</td>
          <td className='39'>39</td>
          <td className='40'>40</td>
        </tr>

        <tr>
          <td className='30'>30</td>
          <td className='29'>29</td>
          <td className='28'>28</td>
          <td className='27'>27</td>
          <td className='26'>26</td>
          <td className='25'>25</td>
          <td className='24'>24</td>
          <td className='23'>23</td>
          <td className='22'>22</td>
          <td className='21'>21</td>
        </tr>

        <tr>
          <td className='11'>11</td>
          <td className='12'>12</td>
          <td className='13'>13</td>
          <td className='14'>14</td>
          <td className='15'>15</td>
          <td className='16'>16</td>
          <td className='17'>17</td>
          <td className='18'>18</td>
          <td className='19'>19</td>
          <td className='20'>20</td>
        </tr>

        <tr>
          <td className='10'>10</td>
          <td className='9'>9</td>
          <td className='8'>8</td>
          <td className='7'>7</td>
          <td className='6'>6</td>
          <td className='5'>5</td>
          <td className='4'>4</td>
          <td className='3'>3</td>
          <td className='2'>2</td>
          <td className='1'>1</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <button className='restartBtn'>Restart Game</button>
      <br></br>
      <br></br>
    </div>
    
  )
}

export default App;