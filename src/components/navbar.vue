<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navbar text-white">
        <div class="navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li><a><RouterLink to="/">Home</RouterLink></a></li>
                <li><a><RouterLink to="/rules">Server Rules</RouterLink></a></li>
                <li><a><RouterLink to="/server-guide">Guide</RouterLink></a></li>
            </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost text-xl">Legends Rising</a>
        </div>
        <div class="navbar-end"></div>
    </div>
</template>