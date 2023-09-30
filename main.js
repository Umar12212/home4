const data = {
  color: "red",
  width: 400,
  height: 500,
};

function func({ color, width, height }) {
  console.log(color, width, height);
}

func(data);
