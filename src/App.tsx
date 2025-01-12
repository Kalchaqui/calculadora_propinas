import MenuItem from "./components/Menuitem"
import { menuItems } from "./data/db"

function App() {

  return (
    <>
    <header className="bg-black py-5">
      <h1 className="text-white text-center text-3xl font-mono ">Calculadora de Propinas y Consumo</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
    <div className="p-5">
    <h2 className="text-4xl font-black">Menú</h2>

<div className="space-y-3 mt-10">
    {menuItems.map(item =>(
      <MenuItem
      key={item.id}
      item={item}
      />
    ))}
    </div>
    </div>

    <div>
    <h2>Consumo</h2>
    </div>

    </main>

    </>
  )
}

export default App
