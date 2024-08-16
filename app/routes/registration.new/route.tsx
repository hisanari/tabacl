import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [{ title: "新規会員登録" }, { name: "description", content: "新規会員登録" }];
};

export default function NewRegistrarion() {
    return (
        <>
            <h1>会員登録</h1>
        </>
    )
}