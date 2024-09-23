// src/pages/Home.js
import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@components/Banner";
import ProductCard from "@components/ProductCard";
import MainLayout from "@layouts/MainLayout";

const Home = () => {
    const { t } = useTranslation();
    console.log(t);
    return (
        <MainLayout>
            <Banner />
            <div className="mt-5">
                <h1>{t("home.title")}</h1>
                <p>{t("home.description")}</p>
                <ProductCard
                    title="Refurbished iPhone 12"
                    description={t("home.productDescription")}
                />
                <ProductCard
                    title="Refurbished Samsung Galaxy S21"
                    description={t("home.productDescription")}
                />
            </div>
        </MainLayout>
    );
};

export default Home;
