import Input from "../common/form/Input";
import Label from "../common/form/Label";
import TextArea from "../common/form/TextArea";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../common/Button";
import { useState } from "react";
import { useSubmit } from "./hooks";

const SignUpForm = () => {
  const router = useRouter();

  const { idToken, avatar } = router.query;
  const [name, setName] = useState<string>("");
  const [tagline, setTagLine] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submit = useSubmit(
    idToken as string,
    {
      name,
      tagline,
      description,
      avatar,
    },
    setError
  );

  if (!avatar) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center text-left">
      <div className="py-8">
        <Image
          src={avatar as string}
          alt={"Avatar"}
          width={150}
          height={150}
          className={"rounded-full"}
        />
      </div>
      <Label htmlFor="username">Username</Label>
      <Input
        placeholder="Arth"
        name="username"
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="Tagline">Tagline</Label>
      <Input
        placeholder="Let's figure out things together ;)"
        name="Tagline"
        onChange={(e) => setTagLine(e.target.value)}
      />
      <Label htmlFor="description">Description</Label>
      <TextArea
        placeholder="A 16 y/o passionate developer ;)"
        maxLength={120}
        name="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <span className="text-red-600 mt-8">{error}</span>
      <Button
        className={`px py-2 bg-blue text-white rounded-md w-2/4 mt-8`}
        onClick={() => submit()}
      >
        Submit
      </Button>
    </div>
  );
};

export default SignUpForm;
