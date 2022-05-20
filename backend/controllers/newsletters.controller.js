var vaults = [
    { id: "123-456-789", text: "Vault-1" },
    { id: "987-654-321", text: "AFS Vault" },
    { id: "111-555-333", text: "FTP Vault" }
  ];
  var workflowData = [
    {step: 'Step 1', name: 'Electronics Drawing Request', docCount: 5},
    {step: 'Step 2', name: 'Electronics Drawing Request', docCount: 1},
    {step: 'Step 3', name: 'Electronics Drawing Request', docCount: 6},
    {step: 'Step 4', name: 'Electronics Drawing Request', docCount: 1},
    {step: 'Step 1', name: 'Repair Workflow', docCount: 7},
    {step: 'Step 2', name: 'Repair Workflow', docCount: 5},
    {step: 'Step 3', name: 'Repair Workflow', docCount: 6},
    {step: 'Step 4', name: 'Repair Workflow', docCount: 3},
    {step: 'Step 5', name: 'Repair Workflow', docCount: 20},
    {step: 'Step 1', name: 'Tooling Requisition', docCount: 15},
    {step: 'Step 2', name: 'Tooling Requisition', docCount: 6},
    {step: 'Step 3', name: 'Tooling Requisition', docCount: 2},
    {step: 'Step 4', name: 'Tooling Requisition', docCount: 0},
    {step: 'Step 5', name: 'Tooling Requisition', docCount: 2}
  ];
  
  exports.getWorkflowData = (req, res, next) => {
    res.status(200).json(workflowData);
  };
  