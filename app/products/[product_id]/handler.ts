import server from "@/utils/server";

export const getProductById = async (
  id: number,
): Promise<{ data?: EditProduct; status: boolean; message?: string }> => {
  try {
    const { data } = await server.get(`/products/${id}`);
    return { data: data.data, status: true };
  } catch (err) {
    const { status } = err as RequestFailedError;
    switch (status) {
      case 404: {
        return { status: false, message: "product not found" };
      }
      case 401: {
        return { status: false, message: "unauthorized" };
      }
      default: {
        return { status: false, message: "something went wrong" };
      }
    }
  }
};

export const updateProduct = (productID: number) => {
  return async (inputData: EditProduct) => {
    "use server";
    try {
      const { data } = await server.put(`/products/${productID}`, inputData);
      return { data: data.data, status: true };
    } catch (err) {
      const { status } = err as RequestFailedError;
      switch (status) {
        case 404: {
          return { status: false, message: "product not found" };
        }
        case 401: {
          return { status: false, message: "unauthorized" };
        }
        default: {
          return { status: false, message: "something went wrong" };
        }
      }
    }
  };
};

// export async function updateProduct(
// 	id: number,
// 	inputData: EditProduct,
// ): Promise<{ data?: EditProduct; status: boolean; message?: string }> {
// 	try {
// 		const { data } = await server.put(`/products/${id}`, inputData);
// 		return { data: data.data, status: true };
// 	} catch (err) {
// 		const { status } = err as RequestFailedError;
// 		switch (status) {
// 			case 404: {
// 				return { status: false, message: "product not found" };
// 			}
// 			case 401: {
// 				return { status: false, message: "unauthorized" };
// 			}
// 			default: {
// 				return { status: false, message: "something went wrong" };
// 			}
// 		}
// 	}
// }
