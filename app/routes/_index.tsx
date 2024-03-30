import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="lg:flex lg:justify-center">
			<div className="lg:w-1/3 sm:w-full px-8 pt-6 pb-4 mb-4">
				<h1 className="text-base">ログイン</h1>
				<Form method="post" action="/login">
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							メールアドレス
						</label>
						<input
							type="email"
							name="email"
							placeholder="メールアドレス"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
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
