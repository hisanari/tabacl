import {
	ActionFunctionArgs,
	json,
	MetaFunction,
	redirect,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import TextField from "~/components/ui/text_field";
import Submit_button from "~/components/ui/buttons/submit_button";
import LinkButton from "~/components/ui/buttons/link_button";

export const meta: MetaFunction = () => {
	return [{ title: "ログイン" }, { name: "description", content: "ログイン" }];
};

export default function Index() {
	const actionData = useActionData<typeof action>();
	return (
		<div className="lg:flex lg:justify-center">
			<div className="lg:w-1/3 sm:w-full mt-16 mb-4">
				<Form method="post" className="pt-6 pb-6 px-8 lg:border-solid lg:border-2 lg:border-gray-300 rounded">
					<div className="mb-4">
						<TextField
							label="メールアドレス"
							name="email"
							placeholder="メールアドレス"
							errors={actionData?.errors || {}}
						/>
					</div>

					<div className="mb-6">
						<TextField
							label="パスワード"
							name="password"
							placeholder="パスワード"
							errors={actionData?.errors || {}}
						/>
					</div>

					<div className="flex items-center justify-between">
						<Submit_button/>
						<LinkButton name={"新規登録"} href={"/register"}/>
					</div>
				</Form>
				<div className="mt-2 lg:pr-0 text-right">
					<LinkButton name={"パスワードを忘れた場合"} href={"\"/forgot-password\""}/>
				</div>
			</div>
		</div>
	);
}

export async function action({request}: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = String(formData.get("email"));
	const password = String(formData.get("password"));

	const errors = {
		email: "",
		password: "",
	};

	if (!email.includes("@")) {
		errors.email = "メールアドレスが正しくありません";
	}

	if (password.length <= 0) {
		errors.password = "パスワードが正しくありません";
	}

	if (Object.keys(errors).length > 0) {
		return json({ errors });
	}

	return redirect("/");
}
