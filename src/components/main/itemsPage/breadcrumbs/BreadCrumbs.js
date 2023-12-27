import * as React from "react";


function Breadcrumb({ productData }) {
  return (
    <div>
      {/* <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs">
        {[
          {
            label: productData.Category,
            path: `/${productData.Category}`,
          },
          {
            label: productData.SubCategory,
            path: `/${productData.Category}/${productData.SubCategory}`,
          },
          {
            label: productData.Item_Number,
            path: `/${productData.Category}/${productData.SubCategory}/${productData.Item_Number}`,
          },
        ].map((item) => (
          <Link
            key={item.label}
            component={NavLink}
            to={item.path}
            color="success"
            variant="soft"
            level="h4"
          >
            {item.label}
          </Link>
        ))}
      </Breadcrumbs> */}
    </div>
  );
}

export default Breadcrumb;
