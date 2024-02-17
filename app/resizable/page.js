"use client";
import React from "react";
import { Resizable } from "re-resizable";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Resizable
          defaultSize={{ width: "23%", height: "50vh" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lightblue",
            border: "1px solid blue",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            marginRight: "0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h2>Component 1</h2>
            <Image
              src={"/img1.jpg"}
              width={108}
              height={67}
              layout="responsive"
            />
            <p style={{ textAlign: "center" }}>
              <i>This is Component Number 1</i>
            </p>
          </div>
        </Resizable>
        <Resizable
          defaultSize={{ width: "74%", height: "50vh" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lightblue",
            border: "1px solid blue",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            overflow: "hidden",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h2>Component 2</h2>
            <Image
              src={"/img1.jpg"}
              width={108}
              height={67}
              layout="responsive"
            />
            <p style={{ textAlign: "center" }}>
              <i>This is Component Number 2</i>
            </p>
          </div>
        </Resizable>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Resizable
          defaultSize={{ width: "99%", height: "50vh" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lightblue",
            border: "1px solid blue",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h2>Component 3</h2>
            <Image
              src={"/img1.jpg"}
              width={108}
              height={67}
              layout="responsive"
            />
            <p style={{ textAlign: "center" }}>
              <i>This is Component Number 3</i>
            </p>
          </div>
        </Resizable>
      </div>
    </>
  );
};

export default page;
