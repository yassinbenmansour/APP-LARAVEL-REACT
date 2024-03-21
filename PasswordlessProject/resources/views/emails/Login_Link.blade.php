<x-mail::message>
# Yout Login

The body of your message.

<x-mail::button :url="$url">
Login
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
