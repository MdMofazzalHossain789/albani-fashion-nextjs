import Button from "@/components/shared/Button";

const ToggleButton = () => {
  return (
    <div className="flex items-center gap-x-4 text-lg my-2">
      <h1 className="font-semibold">Available Sizes:</h1>
      <Button variant={"outline"} className="rounded-sm py-2">
        S
      </Button>
      <Button variant={"outline"} className="rounded-sm py-2">
        M
      </Button>
      <Button variant={"outline"} className="rounded-sm py-2">
        L
      </Button>
      <Button variant={"outline"} className="rounded-sm py-2">
        XL
      </Button>
      <Button variant={"outline"} className="rounded-sm py-2">
        XXL
      </Button>
    </div>
  );
};

export default ToggleButton;
