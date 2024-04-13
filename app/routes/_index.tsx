import {
	ActionFunctionArgs,
	json,
	MetaFunction,
	redirect,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [{ title: "ログイン" }, { name: "description", content: "ログイン" }];
};

export default function Index() {
	const actionData = useActionData<typeof action>();
	return (
		<div className="lg:flex lg:justify-center">
			<div className="lg:w-1/3 sm:w-full px-8 pt-6 pb-4 mb-4">
				<h1 className="text-base">ログイン</h1>
				<Form method="post">
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							メールアドレス
						</label>
						<input
							type="text"
							name="email"
							placeholder="メールアドレス"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
						{actionData?.errors?.email ? (
							<p className="text-red-500 text-xs">{actionData?.errors.email}</p>
						) : null}
					</div>

					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							パスワード
						</label>
						<input
							type="password"
							name="password"
							placeholder="パスワード"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
						{actionData?.errors?.password ? (
							<p className="text-red-500 text-xs">
								{actionData?.errors.password}
							</p>
						) : null}
					</div>

					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
						>
							ログイン
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="/register"
						>
							新規登録
						</a>
					</div>

					<div className="mt-4">
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="/forgot-password"
						>
							パスワードを忘れた場合
						</a>
					</div>
				</Form>
			</div>
		</div>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = String(formData.get("email"));
	const password = String(formData.get("password"));

	const errors = {};

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
