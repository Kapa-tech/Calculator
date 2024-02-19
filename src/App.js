import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [func, setFunction] = useState(null);
  const [finilly, setFinilly] = useState(0);

  function reset() {
    setValue(0);
    setValue1(0);
    setFunction(null);
    setFinilly(0);
  }

  function div() {
    setFunction("/");
  }

  function sub() {
    setFunction("-");
  }

  function plus() {
    setFunction("+");
  }

  function pop() {
    setFunction("*");
  }

  function bal() {
    setFunction("%");
  }

  function submit() {
    if (func === "%") {
      setFinilly(Number(value) % Number(value1));
      setValue(Number(value) % Number(value1));
      setValue1(0);
    }

    if (func === "/") {
      setFinilly(Number(value) / Number(value1));
      setValue(Number(value) / Number(value1));
      setValue1(0);
    }

    if (func === "-") {
      setFinilly(Number(value) - Number(value1));
      setValue(Number(value) - Number(value1));
      setValue1(0);
    }

    if (func === "+") {
      setFinilly(Number(value) + Number(value1));
      setValue(Number(value) + Number(value1));
      setValue1(0);
    }

    if (func === "*") {
      setFinilly(Number(value) * Number(value1));
      setValue(Number(value) * Number(value1));
      setValue1(0);
    }
  }

  return (
    <div>
      <Resault value={finilly} />

      <Row1
        value={value}
        setValue={setValue}
        func={func}
        setFunction={setFunction}
        div={div}
        sub={sub}
        plus={plus}
        pop={pop}
        bal={bal}
        value1={value1}
        setValue1={setValue1}
        reset={reset}
      />
      <Lasrow
        submit={submit}
        setValue1={setValue1}
        setValue={setValue}
        func={func}
      />
    </div>
  );
}

function Resault({ value }) {
  return (
    <div className="resault">
      <span>{value}</span>
    </div>
  );
}

function Row1({
  value,
  setValue,
  func,
  setFunction,
  div,
  sub,
  plus,
  pop,
  bal,
  value1,
  setValue1,
  reset,
}) {
  return (
    <div className="calculator">
      <p onClick={reset}>AC</p>
      <p>+/-</p>
      <p onClick={bal}>%</p>
      <nav onClick={div}>/</nav>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "7")
            : () => setValue1((v) => v + "7")
        }
      >
        7
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "8")
            : () => setValue1((v) => v + "8")
        }
      >
        8
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "9")
            : () => setValue1((v) => v + "9")
        }
      >
        9
      </p>
      <nav onClick={pop}>X</nav>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "4")
            : () => setValue1((v) => v + "4")
        }
      >
        4
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "5")
            : () => setValue1((v) => v + "5")
        }
      >
        5
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "6")
            : () => setValue1((v) => v + "6")
        }
      >
        6
      </p>
      <nav onClick={sub}>-</nav>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "1")
            : () => setValue1((v) => v + "1")
        }
      >
        1
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "2")
            : () => setValue1((v) => v + "2")
        }
      >
        2
      </p>
      <p
        onClick={
          func === null
            ? () => setValue((v) => v + "3")
            : () => setValue1((v) => v + "3")
        }
      >
        3
      </p>
      <nav onClick={plus}>+</nav>
    </div>
  );
}

function Lasrow({ submit, setValue1, setValue, func }) {
  return (
    <div className="lastrow">
      <p
        className="padding"
        onClick={
          func === null
            ? () => setValue((v) => v + "0")
            : () => setValue1((v) => v + "0")
        }
      >
        0
      </p>

      <p
        className="padding1"
        onClick={
          func === null
            ? () => setValue((v) => v + ".")
            : () => setValue1((v) => v + ".")
        }
      >
        .
      </p>

      <nav className="padding2" onClick={submit}>
        =
      </nav>
    </div>
  );
}
