import './global.css';
import stylesApp from './App.module.css';

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <>
     <Header />
      <div className={stylesApp.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Dalcy Fabríio" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, officia ducimus! Nemo velit eaque dolore vel officiis alias esse quos repellat. Pariatur officiis sed sunt esse asperiores minus, blanditiis aut."
          />
        </main>
      </div>
    </>
  )
}


export default App
