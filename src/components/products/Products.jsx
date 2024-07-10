import React from "react";
import "./products.css";

const Table = () => {
  return (
    <>
      <table className="table-fixed text-sm md:text-lg mt-2 md:mt-10 border border-slate-300">
        <thead>
          <tr className="odd:bg-white even:bg-slate-50">
            <th className="border border-slate-300 px-2">Style Number</th>
            <th className="border border-slate-300 px-2">Strand Warp</th>
            <th className="border border-slate-300 px-2">Diameter Fill</th>
            <th className="border border-slate-300 px-2">Strand Count</th>
            <th className="border border-slate-300 px-2">
              Holes per Square Inch
            </th>
            <th className="border border-slate-300 px-2">Hole Size</th>
            <th className="border border-slate-300 px-2">Percent Open Area</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2433</td>
            <td>0.03</td>
            <td>0.033</td>
            <td>14 x 13</td>
            <td>182</td>
            <td>0.00182</td>
            <td>33.1</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2403</td>
            <td>0.03</td>
            <td>0.033</td>
            <td>12 x 12</td>
            <td>144</td>
            <td>0.00273</td>
            <td>39.1</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2383</td>
            <td>0.03</td>
            <td>0.033</td>
            <td>10 x 10</td>
            <td>100</td>
            <td>0.00469</td>
            <td>46.9</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2373</td>
            <td>0.033</td>
            <td>0.035</td>
            <td>9 x 9</td>
            <td>81</td>
            <td>0.00595</td>
            <td>48.2</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2363</td>
            <td>0.033</td>
            <td>0.035</td>
            <td>8 x 8</td>
            <td>64</td>
            <td>0.00828</td>
            <td>53</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2353</td>
            <td>0.033</td>
            <td>0.035</td>
            <td>7 x 7</td>
            <td>49</td>
            <td>0.01185</td>
            <td>58.1</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2384</td>
            <td>0.032</td>
            <td>0.035</td>
            <td>10 x 10</td>
            <td>100</td>
            <td>0.00442</td>
            <td>44.2</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2374</td>
            <td>0.033</td>
            <td>0.035</td>
            <td>9 x 9</td>
            <td>81</td>
            <td>0.00595</td>
            <td>48.2</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-2366</td>
            <td>0.045</td>
            <td>0.045</td>
            <td>8 x 8</td>
            <td>64</td>
            <td>0.0064</td>
            <td>41</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-1590</td>
            <td>0.04</td>
            <td>0.035</td>
            <td>5 x 5</td>
            <td>25</td>
            <td>0.0264</td>
            <td>66</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-1553</td>
            <td>0.0021</td>
            <td>0.025</td>
            <td>17 x 17</td>
            <td>289</td>
            <td>0.00128</td>
            <td>37</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-1593</td>
            <td>0.0021</td>
            <td>0.025</td>
            <td>20 x 18</td>
            <td>360</td>
            <td>0.00089</td>
            <td>31.9</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-1613</td>
            <td>0.0021</td>
            <td>0.025</td>
            <td>20 x 20</td>
            <td>400</td>
            <td>0.00073</td>
            <td>29</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-1653</td>
            <td>0.0021</td>
            <td>0.025</td>
            <td>20 x 22</td>
            <td>440</td>
            <td>0.00061</td>
            <td>26.9</td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-7628</td>
            <td></td>
            <td>0.007</td>
            <td>44 x 32</td>
            <td>Closeweave</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-3434</td>
            <td></td>
            <td>0.012</td>
            <td>34 x 34</td>
            <td>Closeweave</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="odd:bg-white even:bg-slate-200">
            <td>KI-3712220</td>
            <td></td>
            <td>0.025</td>
            <td>24 x 20</td>
            <td>Closeweave</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Products = () => {
  return (
    <div
      className="kabert__products p-6 bg-gradient-to-b from-white to-stone-50 text-gray-700"
      id="products"
    >
      <h1 className="text-4xl sm:text-6xl font-bold py-4 m-5 mt-16 bg-gradient-to-r from-emerald-500 to-slate-700 text-transparent bg-clip-text inline-block">
        High-quality Products
      </h1>
      <div className="kabert__products-container">
        <div className="kabert__products-groupA">
          <div className="kabert__products-fiberglass m-1 mb-4 p-4  bg-gray-100 ">
            <h4 className="text-2xl sm:text-4xl font-bold">Fiberglass Cloth</h4>
            <p className="text-sm sm:text-lg">
              <br />
              Since 1979 Kabert Industries has been weaving fiberglass cloth in
              Lynn, Indiana for the aluminum industry. Fiberglass cloth is an
              inexpensive and effective method of non-ferrous molten metal
              distribution and filtration. <br /> <br /> Kabert Industries cloth
              is available in a variety of styles. Plain weave is a simple weave
              where the warp yarns run over and under the fill yarns. Similarly,
              twill weave consists of the warp yarns running over two or more
              fill yarns. The leno weave style interlocks the warp yarns, which
              cross over each other and join together with the fill yarns. Also,
              three, four and six strand cloths are available. <br /> <br />
              All of Kabert Industries cloth is woven to specification on
              approximately 100 linear yard rolls. Standard widths are
              obtainable for each style. Minimum orders may apply on some
              widths. Standard or brown finishes are available.
            </p>
          </div>
        </div>
        <div className="kabert__products-groupB ">
          <div className="kabert__products-vacuum m-1 p-4 mb-4 bg-gray-50">
            <h4 className="text-2xl sm:text-4xl font-bold">
              Vacuum Formed Shapes
            </h4>
            <p className="text-sm sm:text-lg">
              <br />
              Kabert Industries vacuum formed shapes are produced by dewatering
              a slurry of Fiberfrax Bulk Ceramic Fibers and special high
              temperature binders. This manufacturing method permits
              considerable freedom to vary shape, thickness, density and
              hardness. Often the vacuum casting technique provides the most
              economical answer to producing large quantities of parts in simple
              or complex configurations. <br /> <br />
              Our vacuum formed shapes resist attack from the most corrosive
              agents. Exceptions are hydrofluoric and phosphoric acids and
              concentrated alkalies. Vacuum cast parts also resist oxidation and
              reduction. If wet by water or steam, thermal and physical
              properties are completely restored upon drying. No water of
              hydration is present. <br /> <br />
            </p>
            {/* There will need to be tables and lists for the rest of the information provided here */}
          </div>
          <div className="kabert__products-bags m-1 p-4 mb-4 bg-gray-50">
            <h4 className="text-2xl sm:text-4xl font-bold">Mini Channel Bag</h4>
            <p className="text-sm sm:text-lg">
              <br />
              An inexpensive and effective method of distributing molten
              aluminum to appropriate areas of the mold. Kabert Industries mini
              channel bags have been successfully used since 1980 in all alloys
              including body and lid. <br /> <br />
              The closeweave outer jacket distributes hot metal away from the
              center to the ends of the mold reducing the possibility of a
              dished butt crack at the start of a cast. The open weave lessens
              the possibility of build-up inside the bag during casting. Easier
              to install and remove. Standard designs in stock. Any size or
              style manufactured to specification. Special hangers can be
              installed in trough.
            </p>
            {/* There will need to be tables and lists for the rest of the information provided here */}
          </div>
          <div className="kabert__products-gaskets m-1 p-4 mb-4 bg-gray-50">
            <h4 className="text-2xl sm:text-4xl font-bold">Gaskets</h4>
            <p className="text-sm sm:text-lg">
              <br />
              Gaskets are an inexpensive method of sealing and insulating
              troughs. Fiberglass insulation is die or hand cut to any
              specification gasket. Gaskets can be sewn onto fiberglass trough
              socks to filter out large impurities upstream so they will not
              break the sniff nozzle and downstream so they will not block the
              control pin. The temperature prior to breakdown is 600 to 700
              degrees Fahrenheit. Fiberglass insulation is available in a
              variety of thickness and densities. <br /> <br />
              <strong>Density</strong>: 2 LB, 3 LB, 4 LB, or 6 LB <br />{" "}
              <strong>Thickness</strong>: 1/2", 3/4", or 1"
            </p>
          </div>
        </div>
      </div>
      <h1 className="bg-gradient-to-r from-slate-700 to-emerald-500 text-transparent bg-clip-text text-3xl sm:text-5xl font-bold text-center mt-12 pb-3">
        Fiberglass Cloth Details
      </h1>
      <p className="sm:hidden text-center font-thin text-sm">
        (Swipe/scroll to view)
      </p>
      <div className="kabert__products-table flex md:items-center md:justify-center overflow-auto ">
        <Table />
      </div>
    </div>
  );
};

export default Products;
