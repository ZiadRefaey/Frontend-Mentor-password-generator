export default function PasswordStrengthBars({ difficulty }) {
  // Define a function to determine the number of colored bars and their color.
  const getBarsConfig = () => {
    switch (difficulty) {
      case "TOO WEAK":
        return [
          { color: "#F64A4A", backgroundColor: "#F64A4A", key: 1 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 2 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 3 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 4 },
        ];
      case "WEAK":
        return [
          { color: "#FB7C58", backgroundColor: "#FB7C58", key: 1 },
          { color: "#FB7C58", backgroundColor: "#FB7C58", key: 2 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 3 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 4 },
        ];
      case "MEDIUM":
        return [
          { color: "#F8CD65", backgroundColor: "#F8CD65", key: 1 },
          { color: "#F8CD65", backgroundColor: "#F8CD65", key: 2 },
          { color: "#F8CD65", backgroundColor: "#F8CD65", key: 3 },
          { color: "#E6E5EA", backgroundColor: "inherit", key: 4 },
        ];
      case "STRONG":
        return [
          { color: "#A4FFAF", backgroundColor: "#A4FFAF", key: 1 },
          { color: "#A4FFAF", backgroundColor: "#A4FFAF", key: 2 },
          { color: "#A4FFAF", backgroundColor: "#A4FFAF", key: 3 },
          { color: "#A4FFAF", backgroundColor: "#A4FFAF", key: 4 },
        ];
      // Add more cases for other difficulty levels if needed.
      default:
        return [
          { color: "#E6E5EA", key: 1 },
          { color: "#E6E5EA", key: 2 },
          { color: "#E6E5EA", key: 3 },
          { color: "#E6E5EA", key: 4 },
        ];
    }
  };

  const barsConfig = getBarsConfig();

  return (
    <>
      {difficulty ? (
        <div className="flex items-center justify-center gap-2">
          {barsConfig.map((bar) => {
            console.log(bar.color === "offWhite" ? "inherit" : bar.color);
            return (
              <div
                key={bar.id}
                className={`w-[10px] h-7`}
                style={{
                  border: `2px solid ${bar.color}`,
                  backgroundColor: `${bar.backgroundColor}`,
                }}
              ></div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
