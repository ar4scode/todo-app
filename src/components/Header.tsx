const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 bg-gray-600 p-2 flex justify-between items-center">
      <h1 className="mx-8 font-semibold text-amber-50 text-xl md:text-2xl md:mx-10">Ar<span className="text-red-600">4</span>sCode</h1>
      <p className="text-xl mx-5 font-semibold text-gray-200 md:mx-10 md:text-2xl">To-Do List</p>
    </div>
  )
}

export default Header;