"use client"

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar"
import {
  Bell,
  CircleHelp,
  ChevronDown,
  Search,
} from "lucide-react"
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const data = [
  {id: 0, label: 'M1 Commission', value: 60 },
  {id: 1, label: 'M2 Commission', value: 40 },
];
const dataset = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 5 },
];

const invoices = [
  {
    invoice: "Tyler",
    invoiceID: "HERO1234",
    menlevel: "M2",
    paymentStatus: "Unpaid",
    weeklyEarning: "+ $20.00",
    totalEarning: "+ $20.00",
    actionArrow:
    (
      <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-chevron-down mx-auto">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
  },
  {
    invoice: "Tyler1",
    invoiceID: "HERO1234",
    menlevel: "M2",
    paymentStatus: "Unpaid",
    weeklyEarning: "+ $20.00",
    totalEarning: "+ $20.00",
    actionArrow:
    (
      <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-chevron-down mx-auto">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
  },
  {
    invoice: "Tyler2",
    invoiceID: "HERO1234",
    menlevel: "M2",
    paymentStatus: "Unpaid",
    weeklyEarning: "+ $20.00",
    totalEarning: "+ $20.00",
    actionArrow:
    (
      <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-chevron-down mx-auto">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
  },
  {
    invoice: "Tyler3",
    invoiceID: "HERO1234",
    menlevel: "M2",
    paymentStatus: "Unpaid",
    weeklyEarning: "+ $20.00",
    totalEarning: "+ $20.00",
    actionArrow:
    (
      <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-chevron-down mx-auto">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
  },
]

export default function Page() {
  const [active, setActive] = useState("Weekly"); 
  const [ActiveDuration, setActiveDuration] = useState("40 days"); 
  const [ActiveTime, setActiveTime] = useState("40 days"); 
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="pb-4">
        <header className="flex h-16 mb-4 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-card border-b">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    My Finance
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Mentor Commission</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ms-auto flex items-center justify-end gap-2">
              <div className="relative items-center justify-center flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-sidebar-accent">
                <Bell />
              </div>
              <div className="relative items-center justify-center flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-sidebar-accent">
                <CircleHelp />
              </div>
              <div className="p-2 self-stretch">
                <div className="w-px h-full bg-sidebar-accent"></div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pb-2">
          <div className="sa_box">
            <h2 className="font-bold lg:text-2xl mb-4 text-white">Total Mentorship Earnings</h2>
            <div className="flex-1 rounded-sm bg-card p-4">
              <div className="flex sa_tab mb-4">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className={active === "Weekly" ? "active font-medium" : ""} onClick={() => setActive("Weekly")}>Weekly</MenubarTrigger>
                    <MenubarTrigger className={active === "Monthly" ? "active font-medium" : ""} onClick={() => setActive("Monthly")} >Monthly</MenubarTrigger>
                    <MenubarTrigger className={active === "Yearly" ? "active font-medium" : ""} onClick={() => setActive("Yearly")} >Yearly</MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
              <div className="grid xl:grid-cols-3 grid-cols-1">
                <div className="inner_card p-3 px-4 rounded-md">
                  <div className="text-white border-b">
                    <h3 className="text-lg mb-1">Upcoming Mentorship Commission</h3>
                    <h4 className="text-2xl font-bold mb-2">$859</h4>
                    <span className="text-sm">By 74 Heroes</span>
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg mb-1">Lifetime Mentorship Commission</h3>
                    <h4 className="text-2xl font-bold mb-2">$3547</h4>
                    <span className="text-sm">By 89 Heroes</span>
                  </div>
                </div>
                <div className="col-span-2 xl:pl-16 xl:pt-0 pt-4">
                  <PieChart className="mx-auto max-w-sm lg:max-w-lg"
                    series={[
                      {
                        cx: 120,
                        cy: 120,
                        innerRadius: 50,
                        outerRadius: 100,
                        data,
                      },
                    ]}
                    height={250}
                    // width={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pb-2">
          <div className="sa_box">
            <h2 className="font-bold lg:text-2xl mb-4 text-white">Mentorship Earnings by Hero</h2>
            <div className="flex-1 rounded-sm bg-card p-4">
              <div className="flex items-center justify-between mb-4 flex-wrap">
                <div className="relative flex grow">
                  <Search className="absolute top-2 lg:top-3 left-3 opacity-75" />
                  <Input className="pl-10 lg:h-12 h-10" />
                </div>
                <div className="dm_group flex justify-end items-center lg:ml-4 w-full lg:w-auto lg:pt-0 pt-4 gap-2 flex-wrap">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="cursor-pointer font-normal bg-tab_fb text-light lg:h-12 h-10">All mentorship level <ChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 2</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="cursor-pointer font-normal bg-tab_fb text-light lg:h-12 h-10">All earning range <ChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 2</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="cursor-pointer font-normal bg-tab_fb text-light lg:h-12 h-10">All priority <ChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 2</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Table>
                <TableHeader className="bg-background">
                  <TableRow>
                    <TableHead className="w-[400px]">Hero Name</TableHead>
                    <TableHead>Hero ID</TableHead>
                    <TableHead>Mentorship Level</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead className="text-right">Weekly Earning</TableHead>
                    <TableHead className="text-right">Total Earning</TableHead>
                    <TableHead> </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="">
                        <div className="relative inline-flex align-middle h-6 w-6 shrink-0 overflow-hidden rounded-full">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                          </Avatar>
                        </div>
                        <div className="inline-block align-middle pl-4">{invoice.invoice}</div>
                      </TableCell>
                      <TableCell>{invoice.invoiceID}</TableCell>
                      <TableCell>{invoice.menlevel}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell className="text-right">{invoice.weeklyEarning}</TableCell>
                      <TableCell className="text-right">{invoice.totalEarning}</TableCell>
                      <TableCell className="text-center">{invoice.actionArrow}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="text-light font-normal pt-4 pb-0">Showing 1-10 of 24 items</TableCell>
                    <TableCell colSpan={6} className="pr-0 pt-4 pb-0">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink className="active-page" href="#" isActive>1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext href="#" />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pb-2">
          <div className="sa_box">
            <h2 className="font-bold lg:text-2xl mb-4 text-white">Trend Line</h2>
            <div className="flex-1 rounded-sm bg-card p-4">
              <div className="flex sa_tab mb-4">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className={ActiveDuration === "40 days" ? "active font-medium" : ""} onClick={() => setActiveDuration("40 days")}>40 days</MenubarTrigger>
                    <MenubarTrigger className={ActiveDuration === "Seasonal" ? "active font-medium" : ""} onClick={() => setActiveDuration("Seasonal")} >Seasonal</MenubarTrigger>
                    <MenubarTrigger className={ActiveDuration === "Annual" ? "active font-medium" : ""} onClick={() => setActiveDuration("Annual")} >Annual</MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
              <div className="grid grid-cols-1">
                <div className="">
                  <LineChart
                    dataset={dataset}
                    xAxis={[{ dataKey: 'x' }]}
                    series={[
                      { curve: "linear", dataKey: 'y' }
                    ]}
                    height={300}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pb-2">
          <div className="sa_box">
            <h2 className="font-bold lg:text-2xl mb-4 text-white">Mentor Growth - Client Acquisition Trend</h2>
            <div className="flex-1 rounded-sm bg-card p-4">
              <div className="flex sa_tab mb-4">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className={ActiveTime === "40 days" ? "active font-medium" : ""} onClick={() => setActiveTime("40 days")}>40 days</MenubarTrigger>
                    <MenubarTrigger className={ActiveTime === "Seasonal" ? "active font-medium" : ""} onClick={() => setActiveTime("Seasonal")} >Seasonal</MenubarTrigger>
                    <MenubarTrigger className={ActiveTime === "Annual" ? "active font-medium" : ""} onClick={() => setActiveTime("Annual")} >Annual</MenubarTrigger>
                    <MenubarTrigger className={ActiveTime === "Lifetime" ? "active font-medium" : ""} onClick={() => setActiveTime("Lifetime")} >Lifetime</MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
              <div className="grid grid-cols-1">
                <div className="">
                  <LineChart
                    dataset={dataset}
                    series={[
                      { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                      { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                    ]}
                    height={300}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
