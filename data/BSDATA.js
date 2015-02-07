
window.BSDATA = {};
BSDATA.bankers = [
	{
		"type": "banker",
		"firstName":"John",
		"lastName":"Doe",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Marie",
				"lastName":"Doe",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9999",
				"email":"xxx@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "FOO",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "foo",
										"lastName": "Bar",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Fooe",
										"lastName": "Bare",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Maa",
										"lastName": "Bar",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "Faa",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Foo2",
										"lastName": "Bar3",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Foo3",
										"lastName": "Bar4",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Foo4",
										"lastName": "Bar5",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "Foo6",
								"lastName": "Bar7",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Foo",
										"lastName": "Bar",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Foo",
										"lastName": "Bar",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Foo",
										"lastName": "Bar",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "Foo7",
								"lastName": "Bar8",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "F00",
										"lastName": "Barr",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Foo",
										"lastName": "Bar",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Woo",
										"lastName": "Laa",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "SCZ BOL",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}
						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "INFO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Amanda",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Beby",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Carla",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "Peru-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Eloise",
										"lastName": "Ermerson",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Fatima",
										"lastName": "Ferrer",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Gabby",
										"lastName": "Green",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "USA-FAA",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Herman",
										"lastName": "Hurtdado",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Ismael",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Juan",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "Col-AQUA",
								"lastName": "Group F",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Kelly",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Leda",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mosa",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ITA-MM",
								"lastName": "Group FSD",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Nelly",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Orisia",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Pepe",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Henry",
		"lastName":"Ford Jr.",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Maria",
		"lastName":"Ceballos",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"John",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Miguel",
		"lastName":"Rojas",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Juan",
		"lastName":"Melgar",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Flor",
		"lastName":"Doe",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Elizabeth",
		"lastName":"Janings",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Priscilla",
		"lastName":"Julio",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
	{
		"type": "banker",
		"firstName":"Suzett",
		"lastName":"Castedo",
		"portfolioValue":"17.5m",
		"relationships":[
			{
				"type": "client",
				"firstName":"Maria",
				"lastName":"Vago",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]

			},
			{
				"type": "client",
				"firstName":"Dorys",
				"lastName":"Molina",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Zelma",
				"lastName":"Yugar",
				"homePhone":"999-999-9999",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"Banker in good standing! Visits bank at least once a year to touch base.",
				"portfolioValue":"500k",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Michael",
				"lastName":"Romannof",
				"homePhone":"718-012-0413",
				"mobilePhone":"917-090-4321",
				"email":"his@mail.com",
				"note":"he visits the bank twice a year to touch base.",
				"portfolioValue":"1m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			},
			{
				"type": "client",
				"firstName":"Miguel",
				"lastName":"Julio",
				"homePhone":"212-747-4113",
				"mobilePhone":"999-998-9998",
				"email":"user@mail.com",
				"note":"he lives on SCZ Bolivia. he visits his investing once a year over the phone.",
				"portfolioValue":"16m",
				"allocations":[
					{
						"name":"group",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type": "group",
								"firstName": "PETRO-BRAS",
								"lastName": "Group A",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Gonzalo",
										"lastName": "Barros",
										"portfolioValue": "1.5m"
									},
									{
										"type": "account",
										"firstName": "Renee",
										"lastName": "Smith",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Mary-Faith",
										"lastName": "Illimani",
										"portfolioValue": "7m"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					},
					{
						"name":"account",
						"type":"type",
						"unitPrice":"500",
						"groups" : [
							{
								"type":"group",
								"firstName": "ARG-AQUA",
								"lastName": "Group B",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Fernando",
										"lastName": "Barrientos",
										"portfolioValue": "750k"
									},
									{
										"type": "account",
										"firstName": "Laura",
										"lastName": "Kemph",
										"portfolioValue": "4.5m"
									},
									{
										"type": "account",
										"firstName": "Will",
										"lastName": "Leghom",
										"portfolioValue": "300k"
									}
								]
							},
							{
								"type":"group",
								"firstName": "ASCIV",
								"lastName": "Group C",
								"portfolioValue": "45m",
								"accounts" : [
									{
										"type": "account",
										"firstName": "Anzelmo",
										"lastName": "Rojas",
										"portfolioValue": "50m"
									},
									{
										"type": "account",
										"firstName": "Nenin",
										"lastName": "Castro",
										"portfolioValue": "58m"
									},
									{
										"type": "account",
										"firstName": "Priscila",
										"lastName": "Serrano",
										"portfolioValue": "90m"
									}
								]
							}

						]
					}
				]
			}
		]
	},
];

BSDATA.members = [
	{
		"firstName": "Susan",
		"lastName": "smooth",
		"status": "unlocked",
		"type": "member",
		"relation": "Lawyer"
	},
	{
		"firstName": "Robert",
		"lastName": "SAmsung",
		"status": "unlocked",
		"type": "member",
		"relation": "Spouse"
	},
	{
		"firstName": "Wendy",
		"lastName": "Smith",
		"status": "unlocked",
		"type": "member",
		"relation": "Agent"
	},
	{
		"firstName": "Flor",
		"lastName": "Melgar",
		"status": "unlocked",
		"type": "member",
		"relation": "Lawyer"
	},
	{
		"firstName": "Eugenia",
		"lastName": "Vago",
		"status": "unlocked",
		"type": "member",
		"relation": "Accountant"
	},
	{
		"firstName": "Jorge",
		"lastName": "Montero",
		"status": "unlocked",
		"type": "member",
		"relation": "Son"
	}
];

BSDATA.smartFeed = [
	{
		"name": "Insights",
		"type": "insightsfeed",
		"documents": [
			{
				"title":"FX: Alliance Capital Mgmt - Large Capt Growth",
				"caption": "Monthly Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com",
				"imageUrl": "/projects/fed/inview/imgs/insight/globe_sm.jpg",
				"bookMark": false,
				"type": "cio"
			},
			{
				"title":"VIEW Corporate Star Resources Mgmt - Super Capt Growth",
				"caption": "IT Overview",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com",
				"imageUrl": "/projects/fed/inview/imgs/insight/emerging_markets.jpg",
				"bookMark": false,
				"type": "fixedIncome"
			},
			{
				"title":"NEWS: Merger IPO Mgmt - Small Capt Growth",
				"caption": "Day call",
				"date": new Date(2010,07, 16).toDateString(),
				"url": "http://fitfab.com",
				"imageUrl": "/projects/fed/inview/imgs/insight/bridge.jpg",
				"bookMark": false,
				"type": "investmentResearch"
			},
			{
				"title":"ARCHIVE: Merger IPO Miguel Julio - Large Capt Growth",
				"caption": "Great  Investment -- ACT NOW",
				"date": new Date(2010,07, 16).toDateString(),
				"url": "http://fitfab.com",
				"imageUrl": "/projects/fed/inview/imgs/insight/globe_sm.jpg",
				"bookMark": false,
				"type": "advisoryServices"
			}
		]
	},
	{
		"name": "Statements",
		"type": "statementsfeed",
		"documents": [
			{
				"title":"Alliance Capital Mgmt - Large Capt Growth",
				"caption": "Some Statement",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Corporate Star Resources Mgmt - Super Capt Growth",
				"caption": "Read Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Merger IPO Mgmt - Small Capt Growth",
				"caption": "Future Statement",
				"date": new Date(2013,02, 11).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Group Capital Mgmt - Large Capt Growth",
				"caption": "Week Statement",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"IPO Star Resources Mgmt - Super Capt Growth",
				"caption": "Daily Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Acquisition IPO Mgmt - Small Capt Growth",
				"caption": "Yearly View",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"StartUp Resources Mgmt - Super Capt Growth",
				"caption": "Daily Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Acquisition IPO this year - Small Capt Growth",
				"caption": "Yearly View",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Fitfab.com Resources Mgmt - Super Capt Growth",
				"caption": "Daily Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"MCCIV IPO Mgmt - Small Capt Growth",
				"caption": "Yearly View",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Avaya ONEX IPO Mgmt - Small Capt Growth",
				"caption": "Yearly View",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"View From the Bridge Mgmt - Small Capt Growth",
				"caption": "Yearly View",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			}
		]
	},
	{
		"name": "Opportunities",
		"type": "opportunities",
		"documents": [
			{
				"title":"Alliance Capital Mgmt - Large Capt Growth",
				"caption": "Monthly Statement",
				"date": new Date().toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Corporate Star Resources Mgmt - Super Capt Growth",
				"caption": "IT Overview",
				"date": new Date(2012,11, 28).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Merger IPO Mgmt - Small Capt Growth",
				"caption": "Day call",
				"date": new Date(2010,07, 16).toDateString(),
				"url": "http://fitfab.com"
			},
			{
				"title":"Merger IPO Miguel Julio - Large Capt Growth",
				"caption": "Great  Investment -- ACT NOW",
				"date": new Date(2010,07, 16).toDateString(),
				"url": "http://fitfab.com"
			}
		]
	}
];

BSDATA.shroff = [
	{
		"id": 100101,
		"type":"banker",
		"name": "John Upper",
		"portfolioValue": "100.5m",
		"relations": [
			{
				"id": 100201,
				"type":"client",
				"name": "Mary Janesen",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 100301,
						"type":"group",
						"name": "INT BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 100401,
								"type":"account",
								"name": "Petro Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 100402,
								"type":"account",
								"name": "Havaina INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 100403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 100302,
						"type":"group",
						"name": "LCL FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 100404,
								"type":"account",
								"name": "Lemon Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 100405,
								"type":"account",
								"name": "Food INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 100406,
								"type":"account",
								"name": "FlY INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 100303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 100407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 100408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 100409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 100202,
				"type":"client",
				"name": "Flor Melgar",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "INT BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "Petro Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "Havaina INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "LCL FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "Lemon Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "Food INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "FlY INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 100203,
				"type":"client",
				"name": "Norman Xanadu",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "OTTO",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "NNC Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "LDN INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "OVE FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "APP Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "WIN INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "GOO INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 100204,
				"type":"client",
				"name": "William Hurtado",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "CHIN BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "CAN Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "BOTT INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "SPN INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "GGR FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "JAR Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "NEM INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "STR INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "CON-LOL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "AQQ",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "BWB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BMV-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			}
		]

	},
	{
		"id": 100102,
		"type":"banker",
		"name": "Mary Lopper",
		"portfolioValue": "100.5m",
		"relations": [
			{
				"id": 200201,
				"type":"client",
				"name": "Scott Lopez",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 200301,
						"type":"group",
						"name": "INT BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 200401,
								"type":"account",
								"name": "INTI Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 200402,
								"type":"account",
								"name": "Havaina INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 200403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 200302,
						"type":"group",
						"name": "LCL FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 200404,
								"type":"account",
								"name": "Lemon Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 200405,
								"type":"account",
								"name": "Food INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 200406,
								"type":"account",
								"name": "FlY INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 200303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 200407,
								"type":"account",
								"name": "FAAR",
								"portfolioValue": "500k"
							},
							{
								"id": 200408,
								"type":"account",
								"name": "LMM",
								"portfolioValue": "12m"
							},
							{
								"id": 200409,
								"type":"account",
								"name": "SZR",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 300201,
				"type":"client",
				"name": "Carlos Banzer",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "INTI",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "SUU Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "AAA INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "IVI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "TTI FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "SEA Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "LPL INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "BYB INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "BOL-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "LPZ",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "CBB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "SCZ-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			}
		]

	},
	{
		"id": 100103,
		"type":"banker",
		"name": "Nancy Fargussen",
		"portfolioValue": "100.5m",
		"relations": [
			{
				"id": 300201,
				"type":"client",
				"name": "Miguel Buena Villa",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "INT BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "Petro Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "Havaina INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "LCL FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "Lemon Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "Food INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "FlY INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 300202,
				"type":"client",
				"name": "Anna Xanadu",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "OTTO",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "NNC Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "LDN INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "OVE FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "APP Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "WIN INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "GOO INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			},
			{
				"id": 300203,
				"type":"client",
				"name": "Nena Buena Villa",
				"portfolioValue": "1.5m",
				"groups": [
					{
						"id": 300301,
						"type":"group",
						"name": "INT BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300401,
								"type":"account",
								"name": "Petro Bras",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300402,
								"type":"account",
								"name": "Havaina INC.",
								"portfolioValue": "5.5m"
							},
							{
								"id": 300403,
								"type":"account",
								"name": "OUI INC.",
								"portfolioValue": "5.5m"
							}
						]

					},
					{
						"id": 300302,
						"type":"group",
						"name": "LCL FL",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300404,
								"type":"account",
								"name": "Lemon Bras",
								"portfolioValue": "1.5m"
							},
							{
								"id": 300405,
								"type":"account",
								"name": "Food INC.",
								"portfolioValue": "2.5m"
							},
							{
								"id": 300406,
								"type":"account",
								"name": "FlY INC.",
								"portfolioValue": "3.5m"
							}
						]

					},
					{
						"id": 300303,
						"type":"group",
						"name": "ARG-BRA",
						"portfolioValue": "10.5m",
						"accounts": [
							{
								"id": 300407,
								"type":"account",
								"name": "Aqua",
								"portfolioValue": "500k"
							},
							{
								"id": 300408,
								"type":"account",
								"name": "IMB",
								"portfolioValue": "12m"
							},
							{
								"id": 300409,
								"type":"account",
								"name": "BACE-INT",
								"portfolioValue": "12.5m"
							}
						]

					}
				]

			}
		]

	}
]

