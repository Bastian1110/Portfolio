const SearchCategoryPage = () => {
  const [showSearchPage, setShowSearchPage] = useState(true);
  const history = useHistory();
  return (
    <Transition
      as="div"
      appear={true} //THIS will make the transition run everytime the component is rendered
      show={showSearchPage}
      enter="transition-all duration-300"
      enterFrom="transform translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-full"
      className="fixed bg-black text-white max-w-2xl mx-auto inset-0 z-40 overflow-y-scroll "
      afterLeave={() => history.push("/")}
    >
      <button onClick={() => setShowSearchPage((prev) => !prev)}>
        Lorem...
      </button>
    </Transition>
  );
};
