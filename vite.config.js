import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig(({ command }) => {
  return {
    base: "/Cinemania-Project/", // ⭐ GitHub Pages için zorunlu

    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },

    root: "src", // ⭐ Proje kökü src klasörü

    build: {
      outDir: "../dist",         // ⭐ dist köke çıkacak
      emptyOutDir: true,         // ⭐ build öncesi dist temizlenir
      sourcemap: true,

      rollupOptions: {
        // ⭐ src içindeki TÜM HTML dosyalarını otomatik giriş yapar
        // alt klasörleri bile otomatik tarar (home, catalog, library, modals, helpers...)
        input: Object.fromEntries(
          glob.sync("**/*.html", { cwd: "src" }).map(file => [
            file.replace(/\.html$/, ""), // entry ismi
            `src/${file}`,               // tam yol
          ])
        ),
      },
    },

    plugins: [
      injectHTML(), // ⭐ <load> etiketleri sorunsuz çalışır
    ],
  };
});
