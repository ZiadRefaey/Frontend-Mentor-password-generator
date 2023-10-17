export default function MainContent({ dispatch, children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "newPassword" });
      }}
      className="px-4 py-5 md:p-8 bg-darkGray w-full flex items-center justify-center flex-col gap-8"
    >
      {children}
    </form>
  );
}
