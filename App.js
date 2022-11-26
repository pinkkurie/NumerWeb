import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Bisection from './RootsofEequations/Bisection';
import FalsePosition from './RootsofEequations/FalsePosition';
import Grapical from './RootsofEequations/Grapical';
import NewtonRaphson from './RootsofEequations/NewtonRaphson';
import OnePointIteration from './RootsofEequations/OnePointIteration';
import Secant from './RootsofEequations/Secant';
import CholeskyDecomposition from './SolutionTechniques/CholeskyDecomposition';
import ConjugateGradient from './SolutionTechniques/ConjugateGradient';
import CramersRule from './SolutionTechniques/CramersRule';
import GaussSeidelIteration from './SolutionTechniques/GaussSeidelIteration';
import GuassElimination from './SolutionTechniques/GuassElimination';
import JacobiIteration from './SolutionTechniques/JacobiIteration';
import LUDecomposition from './SolutionTechniques/LUDecomposition';
import MatrixInversion from './SolutionTechniques/MatrixInversion';

function App() {
    return (
    <div className="App">
        <NavBar />
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<NavBar />}/>
                <Route path='/Bisection' element={<Bisection/>}/>
                <Route path='/FalsePosition' element={<FalsePosition/>}/>
                <Route path='/Grapical' element={<Grapical/>}/>
                <Route path='/NewtonRaphson' element={<NewtonRaphson/>}/>
                <Route path='/OnePointIteration' element={<OnePointIteration/>}/>
                <Route path='/Secant' element={<Secant/>}/>
                <Route path='/CholeskyDecomposition' element={<CholeskyDecomposition/>}/>
                <Route path='/ConjugateGradient' element={<ConjugateGradient/>}/>
                <Route path='/CramersRule' element={<CramersRule/>}/>
                <Route path='/GaussSeidelIteration' element={<GaussSeidelIteration/>}/>
                <Route path='/GuassElimination' element={<GuassElimination/>}/>
                <Route path='/JacobiIteration' element={<JacobiIteration/>}/>
                <Route path='/LUDecomposition' element={<LUDecomposition/>}/>
                <Route path='/MatrixInversion' element={<MatrixInversion/>}/>
            </Routes>      
        </BrowserRouter>
    </div>

    );
}

export default App;
