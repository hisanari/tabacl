import { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [{ title: "パスワードを忘れた場合" }, { name: "description", content: "パスワードを忘れた場合" }]
}

export default function PasswordReset() {
    return (
        <>
            <h1>パスワードを忘れた場合</h1>
        </>
    )
}
