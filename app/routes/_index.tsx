import {
	MetaFunction,
} from "@remix-run/node";
import LinkButton from "~/components/ui/buttons/link_button";


export const meta: MetaFunction = () => {
	return [{ title: "tabaco" }, { name: "description", content: "tabaco" }];
};

export default function Index() {
	return (
		<div className="lg:block lg:justify-center">
			<h1 className="text-2xl text-center mt-16">なんか作りたい</h1>
			<ul>
				<li><LinkButton name={"ログイン"} href={"/sigin_in"}/></li>
				<li><LinkButton name={"新規登録"} href={"/registration/new"}/></li>
			</ul>
		</div>
	);
}
