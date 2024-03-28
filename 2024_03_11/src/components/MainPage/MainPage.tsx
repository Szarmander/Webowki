/* eslint-disable react-hooks/rules-of-hooks */
import { FieldValues, useForm } from 'react-hook-form'
import Header from '../Header/Header'
import { AdressesInputs, OrderDetailsInput, OrdersInput, ProductsInput, UsersInput } from '../../helpers/inputsObjects';
import { Button, CircularProgress, Divider, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import * as S from './MainPage.style'
import { useState } from 'react';
import { useAdresses } from '../../services/useAdresses';
import { AdressesBody, OrderDetailsBody, OrdersBody, ProductsBody, UsersBody } from '../../types/types';
import { UseQueryResult } from '@tanstack/react-query';
import { useOrderDetails } from '../../services/useOrderDetails';
import { useOrders } from '../../services/useOrders';
import { useProducts } from '../../services/useProducts';
import { useUsers } from '../../services/useUsers';

interface MainPageProps {
    table: 'Adresses' | 'OrderDetails' | 'Orders' | 'Products' | 'Users'
}

function MainPage({table}: MainPageProps) {
	const [httpMethodState, setHttpMethodState] = useState<"GET" | "POST" | "PATCH" | "DELETE">("GET")
	const [body, setBody] = useState()
	const {register, handleSubmit} = useForm();
	let query: UseQueryResult<AdressesBody[], Error> | UseQueryResult<OrderDetailsBody[], Error> | UseQueryResult<OrdersBody[], Error> | UseQueryResult<ProductsBody[], Error> | UseQueryResult<UsersBody[], Error> | undefined;
	switch(table) {
		case 'Adresses':
			query = useAdresses(httpMethodState, body);
			break;
		case 'OrderDetails':
			query = useOrderDetails(httpMethodState, body);
			console.log(query.data)
			break;
		case 'Orders':
			query = useOrders(httpMethodState, body);
			break;
		case 'Products':
			query = useProducts(httpMethodState, body);
			break;
		case 'Users':
			query = useUsers(httpMethodState, body);
			break;
		default:
			query = undefined;
			break;
	}
		
	const onSubmit = async (d: FieldValues) => {
		setHttpMethodState(d.httpMethod)
		delete d.httpMethod
		setBody(d)
		await query?.refetch()
		setHttpMethodState('GET')
		await query?.refetch()
	}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<Header table={table}/>
			<S.MainContainer>
				<S.Form>
					<h2>FORMULARZ</h2>
					{table === 'Adresses' && AdressesInputs.map((input) => (
						<S.Label key={input.title}>
							<TextField variant='outlined' size='small' label={input.title} type={input.type} required={input.isRequired} {...register(input.title)}/>
						</S.Label>
					))}
					{table === 'OrderDetails' && OrderDetailsInput.map((input) => (
						<S.Label key={input.title}>
							<TextField variant='outlined' size='small' label={input.title} type={input.type} required={input.isRequired} {...register(input.title)}/>
						</S.Label>
					))}
					{table === 'Orders' && OrdersInput.map((input) => (
						<S.Label key={input.title}>
							<TextField variant='outlined' size='small' label={input.title} type={input.type} required={input.isRequired} {...register(input.title)}/>
						</S.Label>
					))}
					{table === 'Products' && ProductsInput.map((input) => (
						<S.Label key={input.title}>
							<TextField variant='outlined' size='small' label={input.title} type={input.type} required={input.isRequired} {...register(input.title)}/>
						</S.Label>
					))}

					{table === 'Users' && UsersInput.map((input) => (
						<S.Label key={input.title}>
							<TextField variant='outlined' size='small' label={input.title} type={input.type} required={input.isRequired} {...register(input.title)}/>
						</S.Label>
					))}
				</S.Form>
				<Divider flexItem orientation='vertical'/>
				<S.IconsContainer>
					<Select
						label="HTTP Method"
						{...register('httpMethod')}
						defaultValue={'GET'}
						>
							<MenuItem value="GET">GET</MenuItem>
							<MenuItem value="POST">POST</MenuItem>
							<MenuItem value="PATCH">PATCH</MenuItem>
							<MenuItem value="DELETE">DELETE</MenuItem>
					</Select>
					{query?.isLoading ? <CircularProgress/> : <Button type='submit'><S.SendButton type='submit'/></Button>}
				</S.IconsContainer>
				<Divider flexItem orientation='vertical'/>
				<S.TableContainer>
					{table === 'Adresses' && !query?.error ?
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>AddressID</TableCell>
									<TableCell>UserID</TableCell>
									<TableCell>Street</TableCell>
									<TableCell>City</TableCell>
									<TableCell>ZipCode</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{query?.data && Object.values(query.data).map((address: AdressesBody) => (
									<TableRow key={address.AddressID}>
										<TableCell>{address.AddressID}</TableCell>
										<TableCell>{address.UserID}</TableCell>
										<TableCell>{address.Street}</TableCell>
										<TableCell>{address.City}</TableCell>
										<TableCell>{address.ZipCode}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						:
						(
							table === 'OrderDetails' && !query?.error ?
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>OrderDetailID</TableCell>
										<TableCell>Quantity</TableCell>
										<TableCell>OrderID</TableCell>
										<TableCell>ProductID</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{query?.data && Object.values(query.data).map((orderDetail: OrderDetailsBody) => (
										<TableRow key={orderDetail.OrderDetailID}>
											<TableCell>{orderDetail.OrderDetailID}</TableCell>
											<TableCell>{orderDetail.Quantity}</TableCell>
											<TableCell>{orderDetail.OrderID}</TableCell>
											<TableCell>{orderDetail.ProductID}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							:
							(
							table === 'Orders' && !query?.error ?
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>OrderID</TableCell>
											<TableCell>UserID</TableCell>
											<TableCell>OrderDate</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{query?.data && Object.values(query.data).map((order: OrdersBody) => (
											<TableRow key={order.OrderID}>
												<TableCell>{order.OrderID}</TableCell>
												<TableCell>{order.UserID}</TableCell>
												<TableCell>{order.OrderDate?.toString()}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
								:
								(
								table === 'Products' && !query?.error ?
									<Table>
										<TableHead>
											<TableRow>
												<TableCell>ProductID</TableCell>
												<TableCell>ProductsName</TableCell>
												<TableCell>Price</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{query?.data && Object.values(query.data).map((products: ProductsBody) => (
												<TableRow key={products.ProductID}>
													<TableCell>{products.ProductID}</TableCell>
													<TableCell>{products.ProductName}</TableCell>
													<TableCell>{products.Price}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
									:
									(
									table === 'Users' && !query?.error ?
										<Table>
											<TableHead>
												<TableRow>
													<TableCell>UserID</TableCell>
													<TableCell>UserName</TableCell>
													<TableCell>Email</TableCell>
													<TableCell>PhoneNumber</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{query?.data && Object.values(query.data).map((user: UsersBody) => (
													<TableRow key={user.UserID}>
														<TableCell>{user.UserID}</TableCell>
														<TableCell>{user.UserName}</TableCell>
														<TableCell>{user.Email}</TableCell>
														<TableCell>{user.PhoneNumber}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
										:
										<div>error siema</div>
									)
								)
							)
						)
					}
				</S.TableContainer>
			</S.MainContainer>
    </form>
  )
}

export default MainPage