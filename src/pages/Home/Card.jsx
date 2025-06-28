import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function Card() {
  // users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-server-three-virid.vercel.app/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  console.log(users);
  // coffee
  const [coffees, setCoffees] = useState([]);
  fetch(`https://job-portal-server-three-virid.vercel.app/coffee`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      setCoffees(data);
      // console.log(coffees);
    });
  return (
    <div>
      <Tabs>
        <TabList className="text-center ">
          <Tab>Coffee</Tab>
          <Tab>Users</Tab>
        </TabList>
        <div className="mb-10 text-9xl">
          <hr />
        </div>

        <TabPanel>
          <div className="grid gap-6 lg:grid-cols-2">
            {coffees?.map((coffee) => (
              <div
                key={coffee?._id}
                className="p-5 shadow-sm card card-side bg-base-100 dark:bg-gray-800"
              >
                <figure className="mr-5">
                  <img src={coffee?.photo} alt="Movie" />
                </figure>
                <div className="flex">
                  <div className="mb-6">
                    <h2 className="card-title">{coffee?.name}</h2>
                    <p>{coffee?.details}</p>
                    <p>{coffee?.category}</p>
                    <p>{coffee?.quantity}</p>
                    <p>{coffee?.supplier}</p>
                    <p>{coffee?.taste}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* users start */}
          <section className="container px-4 mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Registers Name
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Status
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Users
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Email
                          </th>

                          <th scope="col" className="relative py-3.5 px-4">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {users?.map((user) => (
                          <tr key={user?._id}>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {user?.name}
                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                <IoMdCheckmark />
                                <h2 className="text-sm font-normal">Paid</h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-8 h-8 rounded-full"
                                  src={"https://i.ibb.co/mrK7Sjcw/download.png"}
                                  alt="user photo"
                                />
                                <div>
                                  <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                    {user?.name}
                                  </h2>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {user?.email}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* users end */}
        </TabPanel>
      </Tabs>
    </div>
  );
}
