import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';
import { CurrencyConverter } from './components/CurrencyConverter';

function App() {
 
  return (
    <GlobalProvider>
      <Router>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </Route>
        <Route path="/currency-converter" component={CurrencyConverter}/>
        </Switch>
      </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
