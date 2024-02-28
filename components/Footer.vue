<script setup>
</script>

<template>
    <footer class="p-10 bg-[#181818] text-white flex items-center justify-center mt-20">
        <div class="container max-w-[1000px] max-lg:block flex justify-center mt-10">
            <div class="mx-5">
                <div class="max-lg:flex max-lg:flex-col max-lg:items-center mx-5">
                    <div class="select-none flex items-center mb-5">
                            <NuxtImg src="/logoDark.png" class="max-h-[120px]" />
                            <h1 class="text-4xl" style="font-family:'Ingrid Darling'">MestreCuca</h1>
                    </div>
                    <div class="whitespace-nowrap">
                        <p>© MestreCuca Recipes - 2023</p>
                        <div class="flex text-sm font-light justify-between mt-5">
                            <p>TERMS</p>
                            <p>POLICY</p>
                            <p>CONTACT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-lg:text-center max-lg:my-10">
                <h1 class="font-bold text-lg mb-1">DISCLAIMER</h1>
                <p class="text-xs font-light text-justify">This website is for educational and study purposes only.
    The content of this website is provided for informational and learning purposes only. No information presented here should be considered professional or legal advice. The owner of this website is not responsible for any actions taken based on the information provided on this website.
    All content is created for the purpose of serving as an educational resource and is not intended to replace guidance from qualified professionals. Users are encouraged to seek advice from competent professionals in their respective fields before making any decisions based on the information provided on this website.
    This site may contain links to other resources on the Internet, but these links are provided solely for the convenience of users. The owner of this website is not responsible for the content of these external resources.
    By using this website, you agree to the terms of this legal notice. If you do not agree to these terms, please do not use this website.</p>
            </div>
            <div class="ml-5 mt-5 max-m:m-0">
                <div class="flex justify-between mb-10">
                    <Icon class="mx-4" name="ic:baseline-whatsapp" color="white" size="40" />
                    <Icon class="mx-4" name="line-md:twitter-x" color="white" size="40" />
                    <Icon class="mx-4" name="mdi:linkedin" color="white" size="40" />
                    <Icon class="mx-4" name="mdi:instagram" color="white" size="40" />
                </div>
                <div class="font-light text-right max-lg:text-center">
                    <p>+55 99999-9999</p>
                    <p>mestrecuca@email.com</p>
                    <p>@mestrecuca.recipes</p>
                    <p class="mt-2 text-xs italic">*Fictional social media*</p>
                </div>
            </div>
        </div>
    </footer>
</template>